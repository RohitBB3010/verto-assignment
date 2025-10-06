import { useState } from "react";
import { type Employee } from "../types/employee";
import FiltersPanel from "./FiltersPanel";
import EmployeesList from "./EmployeesList";
import AddEmployee from "./AddEmployeePage";

export default function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isAddPageOpen, setIsAddPageOpen] = useState<boolean>(false);

  function toggleIsOpen(){
    setIsAddPageOpen(prevIsOpen => !prevIsOpen);
  }

  return (
    <div className="employees-page bg-[var(--color-background)] w-full h-full rounded-md flex">
      <div className="w-full h-full flex flex-row">
        <FiltersPanel />
        <EmployeesList toggleIsOpen={toggleIsOpen}/>
      </div>

      {isAddPageOpen && <AddEmployee toggleIsOpen={toggleIsOpen} />}
    </div>
  );
}
