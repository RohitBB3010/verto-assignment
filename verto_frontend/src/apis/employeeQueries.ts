import {
  useMutation,
  useQuery,
  type UseMutationResult,
} from "@tanstack/react-query";
import {
  addEmployeee,
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "./employeeAPIs";
import queryClient from "../queryClient";
import type { AddEmployeeFormInput } from "../types/employee";
import { toast } from "react-toastify";

export const useFetchEmployees = () => {
  return useQuery({
    queryFn: fetchEmployees,
    queryKey: ["employees"],
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddEmployee = (
  onSuccessCallback: () => void
): UseMutationResult<any, Error, AddEmployeeFormInput> => {
  return useMutation({
    mutationFn: addEmployeee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      onSuccessCallback();
      toast.success("Sucessfully added new employee", {
        autoClose: 2000,
        hideProgressBar: false,
        position: "top-center",
      });
    },
    onError: (error: any) => {
      // If backend sent validation errors
      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err: any) =>
          toast.error(err.msg, { position: "top-center" })
        );
      } 
      else {
        toast.error(
          error.response?.data?.message || "Failed to add employee",
          { position: "top-center" }
        );
      }
    },
  });
};

export const useDeleteEmployee = () => {
  return useMutation({
    mutationFn: (employeeId: number) => deleteEmployee(employeeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toast("Deleted employee", {
        autoClose: 2000,
        hideProgressBar: false,
        position: "top-center",
      });
    },
  });
};

export const useUpdateEmployee = (onSuccessCallback? : () => void) => {
  return useMutation({
    mutationFn: (payload : {
      employeeId: number,
      data : Partial<AddEmployeeFormInput>
  }) => updateEmployee(payload.employeeId, payload.data),
    onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ['employees']});
        onSuccessCallback?.();
        toast.success('Employee record updated', {position : "top-center", hideProgressBar : false, autoClose : 2000})
    },
    onError: (error: any) => {
      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err: any) =>
          toast.error(err.msg, { position: "top-center" })
        );
      } else {
        toast.error(
          error.response?.data?.message || "Failed to update employee",
          { position: "top-center" }
        );
      }
    },
  });
};
