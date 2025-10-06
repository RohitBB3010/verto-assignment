import { useMutation, useQuery, type UseMutationResult } from "@tanstack/react-query";
import { addEmployeee, deleteEmployee, fetchEmployees } from "./employeeAPIs";
import queryClient from "../queryClient";
import type { AddEmployeeFormInput } from "../types/employee";
import { toast } from "react-toastify";

export const useFetchEmployees = () => {
    return useQuery({
        queryFn : fetchEmployees,
       queryKey : ['employees'],
       staleTime : 1000*60*5,
    });
}

export const useAddEmployee = (onSuccessCallback : () => void) : UseMutationResult<any, Error, AddEmployeeFormInput> => {
    return useMutation({
        mutationFn : addEmployeee,
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ['employees']});
            onSuccessCallback();
            toast('Sucessfully added new employee', { autoClose : 3000, hideProgressBar : false, position:'top-center'});
        },
        onError : ((error) => {
            //console.log(error);
        })
    });
}

export const useDeleteEmployee = () => {
    return useMutation({
        mutationFn : (employeeId : number) => deleteEmployee(employeeId),
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ['employees']});
            toast('Deleted employee', { autoClose : 3000, hideProgressBar : false, position:'top-center'});
        }
    })
}