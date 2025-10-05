import { useState } from "react";
import { type Employee } from "../types/employee";
import FiltersPanel from "./FiltersPanel";
import EmployeesList from "./EmployeesList";
import EmployeeInfoPanel from "./EmployeeInfoPanel";

export default function EmployeesPage(){
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);

    return(
        <div className="employees-page bg-[var(--color-background)] w-full h-full rounded-md flex">
            {isFilterOpen && <FiltersPanel />}
            <EmployeesList />
            { selectedEmployee && <EmployeeInfoPanel /> }
        </div>
    );
}