import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const NewTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        await Task.create({
            title,
            description,
            user: req.user,
        });

        res.status(201).json({
            sucess: true,
            message: "Task added sucessfully"
        })
    } catch (error) {
        next(error)
    }

}

export const getMyTask = async (req, res, next) => {

    try {
        const userId = req.user._id;

        const tasks = await Task.find({ user: userId });

        res.status(201).json({
            sucess: true,
            tasks,
        })
    } catch (error) {
        next(error)
    }

}
export const UpdateTask = async (req, res, next) => {

    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler("Task not Found!", 404))


        task.isCompleted = !task.isCompleted;

        await task.save();

        res.status(201).json({
            sucess: true,
            message: "Task Updated",
        })
    } catch (error) {
        next(error)
    }

}
export const DeleteTask = async (req, res, next) => {

    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler("Task not Found!", 404))

        await task.deleteOne()

        res.status(201).json({
            sucess: true,
            message: "Task Deleted"
        })
    } catch (error) {
        next(error)
    }

}