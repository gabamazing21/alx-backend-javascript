import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();

// Home page
router.get('/', AppController.getHomepage);

// All students
router.get('/students', StudentsController.getAllStudents);

// All students
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
