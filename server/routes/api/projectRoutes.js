const express = require("express");

const authMiddleware = require("../../middleware/authMiddleware");
const projectController = require("../../controllers/projectController");
const router = express.Router();

// @route    POST api/projects
// @desc     Create a new Project.
// @access   Private 
router.post('/', authMiddleware, projectController.createProject);

// @route    GET api/projects/me
// @desc     Get all of a user's projects
// @access   Private 
router.get('/me', authMiddleware, projectController.getAllProjectsByUser);

// @route    GET api/projects/:id
// @desc     Get a project by id.
// @access   Private 
router.get('/:id', authMiddleware, projectController.getProjectByID);

// @route    DELETE api/project/:id
// @desc     Delete a project
// @access   Private
router.delete('/:id', authMiddleware, projectController.deleteByProjectID);


// @route    PATCH api/projects/:id
// @desc     Edit a project.
// @access   Private 
router.patch('/:id', authMiddleware, projectController.editProject);



module.exports = router;