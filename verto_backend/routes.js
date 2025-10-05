import { Router } from "express";
import { addEmployee } from "./controller.js";
import { body } from "express-validator";
import { Departments, Roles } from "./constants/enums";

const routes = Router();

routes.post('/add-employee',
    [
        body('name').trim().isLength({min : 3}).withMessage('Name should be atleast 3 characters long'),
        body('email').trim().isEmail().withMessage('Email address is invalid'),
        body('phone').trim().matches(/^[0-9]{10}$/).withMessage('Phone number must be atleast 10 characters long'),
        body('department').trim().isIn(Departments).withMessage('Invalid department'),
        body('role').trim().isIn(Roles).withMessage('Invalid role'),
        body('dateOfJoinig').optional().isISO8601().withMessage('Invalid date')
    ],
addEmployee);

export default routes;