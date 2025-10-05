import type { Department, Role } from "../constants/enums"

export type Employee = {
    id : number,
    name : string,
    email : string,
    phone : string,
    department : Department,
    role : Role,
    dateOfJoining : Date
}
