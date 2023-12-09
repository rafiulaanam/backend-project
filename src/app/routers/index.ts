import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { StudentRoute } from '../modules/student/student.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';



const router = Router();

const moduleRoutes = [
    {
      path: '/users',
      route: UserRoute,
    },
    {
      path: '/students',
      route: StudentRoute,
    },
    {
      path: '/academic-semesters',
      route: AcademicSemesterRoute,
    },
  ];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;