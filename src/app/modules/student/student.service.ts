import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
   
    const result = await StudentModel.create(studentData);
    return result;
  };

  const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
  };

  const getSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel.findOne({ id });
    return result;
  };

  

  export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
  }