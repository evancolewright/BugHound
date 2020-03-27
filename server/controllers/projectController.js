const User = require("../models/User");
const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { name, company } = req.body;

  let project = new Project({
    name,
    company,
    admin: req.user.id,
    users: [req.user.id],
    issues: [
      {
        title: "Persistence task",
        poster: req.user.id
      }
    ]
  });

  await project.save();
  res.json(project);
};

exports.getProjectByID = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: "Project not found!" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.deleteByProjectID = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        error: "Project not found!"
      });
    }
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await project.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getAllProjectsByUser = async (req, res) => {
  const projects = await Project.find({ users: req.user.id.toString() });
  res.json(projects);
};

exports.editProject = async (req, res) => {
  const userID = req.user.id;
  const project = await Project.findById(req.params.id);

  // Make sure user is admin!
  if (userID !== project.admin.toString()) {
    res.json({
      error: "You must be an admin to make changes to the project!"
    });
  }

  const entries = Object.entries(req.body);

  entries.forEach(entry => {
    const key = entry[0];
    const value = entry[1];
    project[key] = value;
  });

  await project.save();

  res.json(project);
};
