const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low',
    },
    status: {
      type: String,
      enum: ['ToDo', 'In Progress', 'Done'],
      default: 'ToDo',
    },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creator:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // person who made it
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
