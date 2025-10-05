import prisma from "./prisma/prismaClient.js";
import { validationResult } from "express-validator";

export const addEmployee = async (req, res, next) => {
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                message : "Validation errors",
                error : errors.array()
            })
        }
        
        const {name, email, phone, role, department, dateOfJoining} = req.body;

        const employee = await prisma.employee.create({
            data :{name, email, phone, role, department, dateOfJoining}
        });

        return res.status(201).json({
            message : "Employee added",
            employee : employee
        });

    } catch (err) {
        next(err);
    }
}