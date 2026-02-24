const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const router = express.Router();

const client = new MongoClient(process.env.MONGO_URI);
const dbName = process.env.DB_NAME;

router.post('/register', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const users = db.collection('users');

  const { email, password } = req.body;

  const existing = await users.findOne({ email });
  if (existing) return res.status(400).json({ error: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  await users.insertOne({
    email,
    password: hashed
  });

  res.status(201).json({ message: "Registered" });
});

router.post('/login', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const users = db.collection('users');

  const { email, password } = req.body;

  const user = await users.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Invalid" });

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;