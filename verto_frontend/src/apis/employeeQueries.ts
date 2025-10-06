import { useMutation, useQuery } from "@tanstack/react-query";
import { addEmployeee, fetchEmployees } from "./employeeAPIs";
import queryClient from "../queryClient";

export const useFetchEmployees = () => {
    return useQuery({
        queryFn : fetchEmployees,
       queryKey : ['employees'],
       staleTime : 1000*60*5,
    });
}

export const useAddEmployee = (onSuccessCallback : () => void) => {
    return useMutation({
        mutationFn : addEmployeee,
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ['employees']});
            onSuccessCallback();
        },
        onError : ((error) => {
            //console.log(error);
        })
    });
}