import { useState, type Dispatch, type SetStateAction } from "react";
import { useFetchEmployees } from "../apis/employeeQueries";
import CustomButton from "../components/CustomButton";
import type { Employee } from "../types/employee";
import EmployeeCard from "./EmployeeCard";

export default function EmployeesList({
  toggleIsOpen,
  selectedEmployee,
  setSelectedEmployee
}: {
  toggleIsOpen: () => void;
  selectedEmployee : Employee | null;
  setSelectedEmployee : Dispatch<SetStateAction<Employee | null>>
}) {
  const { data, isLoading } = useFetchEmployees();
  const employees: Employee[] = data ?? [];

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="main-page py-6 px-6 flex-1 flex flex-col">
      <div className="title-row flex flex-row justify-between my-5">
        <div className="title text-4xl font-semibold">Employee Management</div>
        <CustomButton buttonText="Add New Employee" onClick={toggleIsOpen} />
      </div>
      <div className="employees-list block h-full overflow-y-auto">
        {employees.map((employee) => {
          const isMenuOpen = employee.id === selectedEmployee?.id;
          return (
            <EmployeeCard
              key={employee.id}
              isMenuOpen = {isMenuOpen}
        
              setMenuOpen={() => {
                isMenuOpen ? setSelectedEmployee(null) : setSelectedEmployee(employee);
              }}
              employee={employee}
              toggleIsAddPageOpen={toggleIsOpen}
            />
          );
        })}
      </div>
    </div>
  );
}
