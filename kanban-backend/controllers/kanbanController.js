const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib');
const time = require('./../libs/timeLib');
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
//import the model here
const KanbanModel = mongoose.model('Kanban')

let getAllTask = ( req,res ) => {
    KanbanModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err,result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed To Find Task Details',500,null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Task Found','Kanban Controller: getAllTask')
            let apiResponse = response.generate(true, 'No Task Found',404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Tasks Found',200,result)
            res.send(apiResponse)
        }
    })
}
let viewByTaskId = (req,res) => {
    KanbanModel.findOne({ 'taskId' : req.params.taskId}, (err, result) => {
        if (err) {
            console.log('Error Occured')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('Task Not Found')
            let apiResponse = response.generate(true, 'Task Not Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info("Task found successfully","KanbanController:ViewByTaskId",5)
            let apiResponse = response.generate(false, 'Task Found Successfully', 200, result)
            res.send(apiResponse)

        }
    })
}
let deleteTask = (req,res) => {
    //console.log(req.params.budgetId)
    KanbanModel.remove({ 'taskId': req.params.taskId }, (err,result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('Task Not Found')
            let apiResponse = response.generate(true, 'Task Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Task Deletion Success')
            let apiResponse = response.generate(false, 'Task Deleted Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
let editTask = (req,res) => {
    let options = req.body;
    console.log(options);
    KanbanModel.update({ 'taskId' : req.params.taskId }, options, { multi: true}).exec((err,result)=> {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Task Not Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Task Found Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
let addTask = (req,res) => {
    
    var today = Date.now()
    let taskId = shortid.generate()
    console.log("TASK NAME  =  ")
    console.log(req.body)
    let newTask = new KanbanModel({
        columnName: req.body.columnName,
        taskId: taskId,
        taskName: req.body.taskName,
        creationDate: today
    })

    newTask.save((err,result) => {
        console.log("Adding Task")
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else {
            console.log("Task Added")
            let apiResponse = response.generate(false, 'Task Added Successfully', 200, result)
            console.log(apiResponse)
            res.send(apiResponse)
        }
    })
}
module.exports ={
    getAllTask : getAllTask,
    viewByTaskId : viewByTaskId,
    deleteTask : deleteTask,
    editTask : editTask,
    addTask : addTask
}


