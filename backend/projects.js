const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/', (req, res) => {
  const { name, description } = req.body;
  const project = new Project({ name, description });
  project.save()
    .then(() => res.json({ message: 'Project created successfully' }))
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;