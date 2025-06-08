const { StatusCodes } = require('http-status-codes');

class AppErrors extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
        explanation = 'Something went wrong'
    ) {
        super();
        this.name = name,
        this.message = message,
        this.statusCode = statusCode,
        this.explanation = explanation
    }
}

module.exports = AppErrors; 