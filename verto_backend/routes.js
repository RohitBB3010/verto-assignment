import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  fetchEmployees,
  updateEmployeeData,
} from "./controller.js";
import { body, param } from "express-validator";
import { Roles } from "./constants/enums";

const routes = Router();

routes.post(
  "/add-employee",
  [
    body("name")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 characters long"),
    body("email").trim().isEmail().withMessage("Email address is invalid"),
    body("phone")
      .trim()
      .matches(/^[0-9]{10}$/)
      .withMessage("Phone number must be atleast 10 characters long"),
    body("role").trim().isIn(Roles).withMessage("Invalid role"),
    body("dateOfJoining").isISO8601().withMessage("Invalid date"),
  ],
  addEmployee
);

routes.get("/fetch-employees", fetchEmployees);

routes.delete("/delete-employee/:employeeId", param('employeeId').isInt({gt:0}).withMessage("employeeId must be a valid positive integer").toInt(), deleteEmployee);

routes.put(
  "/update-employee-data/:employeeId",
  [
    param('employeeId').isInt({gt:0}).withMessage("employeeId must be a valid positive integer").toInt(),
    body("name").optional()
      .trim()
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 characters long"),
    body("email").optional().trim().isEmail().withMessage("Email address is invalid"),
    body("phone").optional()
      .trim()
      .matches(/^[0-9]{10}$/)
      .withMessage("Phone number must be atleast 10 characters long"),
    body("role").optional().trim().isIn(Roles).withMessage("Invalid role"),
    body("dateOfJoinig").optional().isISO8601().withMessage("Invalid date"),
  ],
  updateEmployeeData
);

export default routes;
