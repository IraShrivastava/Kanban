const response = require('./../libs/responseLib')

let errorHandler = ( err,req,res,next) => {
    console.log("application error handler called");
    console.log(err);
    //res.send('Some error occured at global level')
    
    let apiResponse = response.generate(true, 'Some error occured at global level', 500,null)
    res.send(ApiResponse)
}


let notFoundHandler = (req,res,next) => {

    console.log("Global not found handler called");
    let apiResponse = response.generate(true, 'Route not found in the application', 404,null)
    res.status(404).send(apiResponse);

}

module.exports = {
    globalErrorHandler: errorHandler,
    globalNotFoundHandler : notFoundHandler
}