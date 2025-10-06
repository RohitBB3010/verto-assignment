import prisma from "./prisma/prismaClient.js";
import { validationResult } from "express-validator";

export const addEmployee = async (req, res, next) => {
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success : false,
                message : "Validation errors",
                error : errors.array()
            })
        }
        
        const {name, email, phone, role, department, dateOfJoining} = req.body;

        const employee = await prisma.employee.create({
            data :{name, email, phone, role, department, dateOfJoining}
        });

        return res.status(201).json({
            success : true,
            message : "Employee added",
            employee : employee
        });

    } catch (err) {
        next(err);
    }
}

export const fetchEmployees = async (req, res, next) => {
    try{
        console.log("Fetch request recevied");

        const employees = await prisma.employee.findMany({
            orderBy : {id : 'asc'}
        });

        console.log(employees);
        
        return res.status(200).json({
            success : true,
            message : "Employees data fetched",
            employees : employees
        });
    } catch (err) {
        next(err);
    }
}

export const deleteEmployee = async (req, res, next) => {
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success : false,
                message : "Validation errors",
                errors : errors.array()
            });
        }
        
        const { employeeId } = req.params;

        const deletedEmployee = await prisma.employee.delete({ 
            where : { id : parseInt(employeeId)}
         });

        return res.status(200).json({
            success : true,
            message : "Employee data deleted",
            employee : deletedEmployee
        });

    } catch (err) {
        next(err);
    }
}

export const updateEmployeeData = async (req, res, next) => {
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success : false,
                message : "Validation errors",
                errors : errors.array()
            });
        }

        const { employeeId } = req.params;
        const updateData = req.body;

        const updatedEmployeeData = await prisma.employee.update({
            where : { id : parseInt(employeeId) },
            data : updateData
        });

        return res.status(200).json({
            success : true,
            message : "Employee data updated successfully",
            employee : updatedEmployeeData
        });

    } catch (err) {
        next(err);
    }
}