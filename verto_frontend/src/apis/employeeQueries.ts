import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "./employeeAPIs";

export default function useFetchEmployees(){
    return useQuery({
        queryFn : fetchEmployees,
       queryKey : ['employees'],
       staleTime : 1000
    });
}