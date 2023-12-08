import config from "../../config";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password:string, studentData: TStudent) => {
    const userData: Partial<TUser> = {};

    //if password is not given , use default password
    userData.password = password || (config.default_password as string);
  
    //set student role
    userData.role = 'student';
  
    //set manually generated it
    userData.id = '20301000014';
  
    // create a user
    const newUser = await UserModel.create(userData);
  
    //create a student
    if (Object.keys(newUser).length) {
      // set id , _id as user
      studentData.id = newUser.id;
      studentData.user = newUser._id; //reference _id
  
      const newStudent = await StudentModel.create(studentData);
      return newStudent;
    }
   
    const result = await UserModel.create(studentData);
    return result;
  };


  export const UserServices = {
    createStudentIntoDB
  }