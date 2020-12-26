const express = require('express')
const router = express.Router();
const kanbanController = require('./../controllers/kanbanController');
const appConfig = require('./../config/appConfig');

module.exports.setRouter = function(app){

    let baseUrl = appConfig.apiVersion+'/task';
    
    app.get(baseUrl+'/all',kanbanController.getAllTask);
    /**
	 * @api {get} /api/v1/task/all Get all tasks
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "All Tasks Found",
		"status": 200,
		"data": [
					{
                        "taskName": "String",
                        "taskId": "String",
                        "creationDate": "date"
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Failed To Find Task Details",
		"status": 500,
		"data": null
	   }
	 */
    app.get(baseUrl+'/view/:taskId',kanbanController.viewByTaskId);
    /**
	 * @api {get} /api/v1/task/view/:taskId Get a single task
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} taskId The taskId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Task Found Successfully",
		"status": 200,
		"data": [
					{
                        "taskName": "String",
                        "_id": "String",
                        "taskId": "String",
                        "creationDate": "date",
                        "__v":number
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured",
		"status": 500,
		"data": null
	   }
	 */
    app.post(baseUrl+'/:taskId/delete',kanbanController.deleteTask);
    /**
	 * @api {post} /api/v1/task/:taskId/delete Delete task by taskId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} taskId taskId of the task passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Task Deleted Successfully",
		"status": 200,
		"data": []
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */
    app.put(baseUrl+'/:taskId/edit',kanbanController.editTask);
    /**
	 * @api {put} /api/v1/task/:taskId/edit Edit task by taskId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} taskId taskId of the task passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Task Found Successfully",
		"status": 200,
		"data": []
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */
    app.post(baseUrl+'/addTask',kanbanController.addTask);
    /**
	 * @api {post} /api/v1/task/addTask Create task
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * 
	 * @apiParam {String} taskName name of the task passed as a body parameter
	 * @apiParam {String} columnName name of the column passed as a body parameter
	 * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Task Added successfully",
		"status": 200,
		"data": [
					{
						"taskName": "String",
                        "_id": "String",
                        "taskId": "String",
                        "creationDate": "date",
                        "__v": number
					}
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	   }
	 */
}