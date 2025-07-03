const Task = require('../models/Task');

/* GET /api/tasks */
exports.getTasks = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const tasks = await Task.find({
        $or: [{ assignee: userId }, { creator: userId }],
      })
        .populate('assignee', 'name')  
        .populate('creator',  'name'); 
  
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  

/* POST /api/tasks */
exports.createTask = async (req, res) => {
  try {
    const newTask = new Task({ ...req.body, creator: req.user.id });
    await newTask.save();
    await newTask
    .populate('assignee', 'name')
    .populate('creator', 'name');

  res.json(newTask); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

/* PUT /api/tasks/:id */
exports.updateTask = async (req, res) => {
    try {
      const updated = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
        .populate('assignee', 'name')
        .populate('creator',  'name');
  
      if (!updated) return res.status(404).json({ msg: 'Task not found' });
      res.json(updated);
    } catch (err) {
      res.status(500).send('Server error');
    }
  };

/* DELETE /api/tasks/:id */
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.creator.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    await task.remove();
    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
