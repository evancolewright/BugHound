const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: false
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  issues: [
    {
      title: {
        type: String,
        required: true
      },
      status: {
        enum: ["pending", "completed"],
        default: "pending"
      },
      priority: {
        required: true,
        enum: ["low", "medium", "high"]
      },
      poster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      due: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
