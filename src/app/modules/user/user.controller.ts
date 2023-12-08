import { NextFunction, Request, Response } from "express";
// import { StudentValidationSchema } from "../student/student.validation";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const { password,studentData } = req.body;
      //zod validation
    //   const zodParseData = StudentValidationSchema.parse(password,studentData)
  
      //send data to student service
      const result = await UserServices.createStudentIntoDB(password,studentData);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User is retrieved successfully',
        data: result,
      });
    } catch (err) {
        next(err);
    }
  };

  export const UserControllers = {
 createStudent
  }