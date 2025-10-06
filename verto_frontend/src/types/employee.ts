import type { Department, Role } from "../constants/enums"

export type Employee = {
    id : number,
    name : string,
    email : string,
    phone : string,
    role : Role,
    dateOfJoining : Date
}

export type AddEmployeeFormInput = {
    name : string,
    email : string,
    phone : string,
    role : Role,
    dateOfJoining : Date | string
}