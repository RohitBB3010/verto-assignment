import { Roles, type Role } from "../constants/enums";

export function getRoleLabels(token : Role){
    return Roles.find((r) => r.value == token)?.label;
}
