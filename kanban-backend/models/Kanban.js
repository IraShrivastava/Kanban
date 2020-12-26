//importing mongoose module
const mongoose = require('mongoose')
//import schema
const Schema = mongoose.Schema;

//taskid for unique id of each task
//taskName is name of task
//creation Date = date of task creation
let kanbanSchema = new Schema(
    {
        columnName: {
            type: String,
            default: ''
        },
        taskId: {
            type: String,
            unique: true
        },
        taskName: {
            type: String,
            default: ''
        },
        creationDate: {
            type:Date,
            default:Date.now
        }
    }
)

module.exports= mongoose.model('Kanban', kanbanSchema);