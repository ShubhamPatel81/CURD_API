
const task = require("../models/schema")
const getAllTask = (req, res) => {
    res.send("all done from controller")
}


const createTask = async (req, res) => {
    const creation = await task.create(req.body)
    res.status(201).json({ creation })
    // res.send("this is create task rout ")
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const Task = await task.findOne({ _id: taskID });

        if (!task) {
            return res.status(404).res.json({ msg: `No task with id : ${task}` })
        }
        res.status(200).res.json({ id: req.params.id })
    } catch (error) {

        res.status(500).json({ msg: error });
    }
}
const updateTask = (req, res) => {
    res.send("updatedS all task ")
}
const deleteTask = (req, res) => {
    res.send("delete all task ")
}
module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };