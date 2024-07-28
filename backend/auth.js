const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      if (!user.comparePassword(password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = user.generateToken();
      res.json({ token });
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save()
    .then(() => res.json({ message: 'User created successfully' }))
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;