import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import { Roles, type Role } from "../constants/enums";
import CustomButton from "../components/CustomButton";
import FormInput from "../components/FormInput";
import type { AddEmployeeFormInput, Employee } from "../types/employee";
import { useAddEmployee, useUpdateEmployee } from "../apis/employeeQueries";
import { type Dispatch, type SetStateAction } from "react";

export default function AddEmployee({
  employee,
  toggleIsOpen,
  setSelectedEmployee
}: {
  employee?: Employee | null;
  toggleIsOpen: () => void;
  setSelectedEmployee : Dispatch<SetStateAction<Employee | null>>,
}) {
  console.log(employee);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<AddEmployeeFormInput>({
    mode: "onSubmit",
    defaultValues: employee ? {
      name : employee.name,
      email : employee.email,
      phone : employee.phone,
      dateOfJoining: employee.dateOfJoining
        ? new Date(employee.dateOfJoining).toISOString().split("T")[0]
        : "",
      role : employee.role
    } : {},
  });

  const { mutate: addEmployee, isPending : isPendingAddEmployee} = useAddEmployee(toggleIsOpen);

  const { mutate: updateEmployeeData, isPending : isPendingUpdateEmployee } = useUpdateEmployee(() => {
    toggleIsOpen();
    setSelectedEmployee(null);
  });

  function onSubmit(data: AddEmployeeFormInput): void {
    if (employee === null) {
      addEmployee(data);
      return;
    }

    const editedFields: Partial<AddEmployeeFormInput> = {};

    Object.keys(dirtyFields).forEach((key) => {
      const field = key as keyof AddEmployeeFormInput;
      if (field === "dateOfJoining") {
        editedFields.dateOfJoining = new Date(data.dateOfJoining as string);
      } else if (field === "role") {
        editedFields.role = data.role as Role;
      } else {
        editedFields[field] = data[field];
      }
    });

    updateEmployeeData({ employeeId: employee!.id, data: editedFields });
  }

  return (
    <div className="add-page fixed inset-0 z-50 flex justify-center items-start py-10">
      <div className="fixed inset-0 bg-black/50" onClick={toggleIsOpen}></div>

      <div className="modal-content flex flex-col bg-[var(--color-background)] z-50 justify-center items-center w-[30%] rounded-lg shadow-lg p-4">
        <div className="title flex w-full justify-between items-center mb-4">
          <div></div>
          <div className="text-xl font-semibold">{employee ? "Edit Employee Data" : "Add Employee"}</div>
          <button
            className="text-red-700 text-xl cursor-pointer"
            onClick={() => {
              toggleIsOpen();
              setSelectedEmployee(null);
            }}
          >
            <FiX />
          </button>
        </div>

        <FormInput
          register={register}
          placeHolder="Name"
          fieldName="name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long",
            },
          }}
          error={errors.name}
        />
        <FormInput
          register={register}
          placeHolder="Email"
          fieldName="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
              message: "Enter a valid email address",
            },
          }}
          error={errors.email}
        />
        <FormInput
          register={register}
          placeHolder="Phone"
          fieldName="phone"
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Phone number is invalid",
            },
          }}
          error={errors.phone}
        />
        <div className="flex flex-row justify-between w-[80%] my-2">
          <div> Select role : </div>
          <select
            {...register("role")}
            className="py-1 px-1 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-200 rounded-sm"
          >
            {Roles.map((d) => {
              return (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-row justify-between w-[80%] my-3">
          <div>Date Of Joining</div>
          <input
            {...register("dateOfJoining", {
              required: "Date of joining is required",
            })}
            type="Date"
            className="py-1 px-1 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-200 rounded-sm cursor-pointer"
          />
          {errors.dateOfJoining && (
            <div className="text-sm text-red-600">
              {" "}
              {errors.dateOfJoining?.message}{" "}
            </div>
          )}
        </div>
        <CustomButton
          onClick={handleSubmit(onSubmit)}
          buttonText={employee ? isPendingUpdateEmployee ? "Updating..." : "Update Employee Data" : isPendingAddEmployee ? "Adding..." : "Add Employee"}
          containerClass="my-3"
          isLoading={isPendingAddEmployee || isPendingUpdateEmployee}
        />
      </div>
    </div>
  );
}
