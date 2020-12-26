define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/task/addTask",
    "title": "Create task",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskName",
            "description": "<p>name of the task passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Task Added successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"taskName\": \"String\",\n                        \"_id\": \"String\",\n                        \"taskId\": \"String\",\n                        \"creationDate\": \"date\",\n                        \"__v\": number\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.,\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/kanban.js",
    "groupTitle": "create",
    "name": "PostApiV1TaskAddtask"
  },
  {
    "type": "post",
    "url": "/api/v1/task/:taskId/delete",
    "title": "Delete task by taskId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>taskId of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Task Deleted Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": []\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/kanban.js",
    "groupTitle": "delete",
    "name": "PostApiV1TaskTaskidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/task/:taskId/edit",
    "title": "Edit task by taskId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>taskId of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Task Found Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": []\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/kanban.js",
    "groupTitle": "edit",
    "name": "PutApiV1TaskTaskidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/task/all",
    "title": "Get all tasks",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"All Tasks Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        \"taskName\": \"String\",\n                        \"taskId\": \"String\",\n                        \"creationDate\": \"date\"\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To Find Task Details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/kanban.js",
    "groupTitle": "read",
    "name": "GetApiV1TaskAll"
  },
  {
    "type": "get",
    "url": "/api/v1/task/view/:taskId",
    "title": "Get a single task",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The taskId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Task Found Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        \"taskName\": \"String\",\n                        \"_id\": \"String\",\n                        \"taskId\": \"String\",\n                        \"creationDate\": \"date\",\n                        \"__v\":number\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/kanban.js",
    "groupTitle": "read",
    "name": "GetApiV1TaskViewTaskid"
  }
] });
