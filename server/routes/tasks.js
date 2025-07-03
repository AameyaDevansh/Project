const express = require('express');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const auth = require('../middleware/auth');

const router = express.Router();

/* Protect everything below with JWT middleware */
router.use(auth);

/**
 * @route   GET /api/tasks
 * @desc    Get all tasks visible to the logged‑in user
 */
router.get('/', getTasks);

/**
 * @route   POST /api/tasks
 * @desc    Create a new task
 */
router.post('/', createTask);

/**
 * @route   PUT /api/tasks/:id
 * @desc    Update an existing task
 */
router.put('/:id', updateTask);

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete a task
 */
router.delete('/:id', deleteTask);

module.exports = router;
