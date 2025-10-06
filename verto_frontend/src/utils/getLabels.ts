import { Departments, Roles, type Department, type Role } from "../constants/enums";

export function getRoleLabels(token : Role){
    return Roles.find((r) => r.value == token)?.label;
}

export function getDepartmentLabels(token : Department){
    return Departments.find((d) => d.value == token)?.label;
}