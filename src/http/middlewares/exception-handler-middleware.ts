import { Request, Response, NextFunction } from "express"
import { ApplicationException } from "../../exceptions/application-exception"

interface ErrorResponse {
    type: string
    message: string
    status: number
}

export const exceptionHandlerMiddleware = (exception: Error, _: Request, response: Response, next: NextFunction) => {
    if (response.headersSent) {
		return next(exception);
	}
    
    let errorResponse: ErrorResponse = {
        type: exception.name,
        message: exception.message,
        status: 500
    }
    
    if(exception instanceof ApplicationException) {
        errorResponse.status = exception.status       
    }

    response.status(errorResponse.status)

    response.format({
        default: () => {
            response.setHeader('Content-type', 'application/json')
            response.json(errorResponse).status(errorResponse.status)
        }
    })

    next()
}