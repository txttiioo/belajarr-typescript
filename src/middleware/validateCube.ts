import { error } from "console"
import { NextFunction, Request, Response } from "express";
import Joi from "joi"

/** create validation schema */
let schema = Joi.object({
    panjang: Joi.number().required().min(1),
    lebar: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1)
})

/** create validation function */
let validateCube = (request: Request,
     respone: Response,
      next: NextFunction) => {
        let {error} =  schema.validate(request.body)
        if(error) {
            /** status 400 = BAD REQUEST */
            return respone.status(400).json({
                message: error.details
            })
        }
        next()
      }

      export {validateCube}