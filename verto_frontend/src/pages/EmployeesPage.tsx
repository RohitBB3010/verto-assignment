import { useState } from "react";
import { type Employee } from "../types/employee";
import FiltersPanel from "./FiltersPanel";
import AddEmployee from "./AddEmployeePage";
import { useFetchEmployees } from "../apis/employeeQueries";
import CustomButton from "../components/CustomButton";
import EmployeeCard from "./EmployeeCard";
import type { Role } from "../constants/enums";

export default function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isAddPageOpen, setIsAddPageOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterRole, setFilterRole] = useState<Role | null>(null);

  const { data, isLoading } = useFetchEmployees();
  const employees: Employee[] = data ?? [];
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().startsWith(searchTerm.toLowerCase());

    const matchesRole = !filterRole || employee.role === filterRole;

    return matchesSearch && matchesRole;
  });

  function toggleIsOpen() {
    setIsAddPageOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="employees-page bg-[var(--color-background)] w-full h-full rounded-md flex">
      <div className="w-full h-full flex flex-row">
        <FiltersPanel
          setSearchTerm={setSearchTerm}
          setFilterRole={setFilterRole}
        />

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="main-page py-6 px-6 flex-1 flex flex-col">
            <div className="title-row flex flex-row justify-between my-5">
              <div className="title text-4xl font-semibold">
                Employee Management
              </div>
              <CustomButton
                buttonText="Add New Employee"
                onClick={toggleIsOpen}
              />
            </div>

            <div className="employees-list block h-full overflow-y-auto">
              {filteredEmployees.map((employee) => {
                const isMenuOpen = employee.id === selectedEmployee?.id;
                return (
                  <EmployeeCard
                    key={employee.id}
                    isMenuOpen={isMenuOpen}
                    setMenuOpen={() =>
                      isMenuOpen
                        ? setSelectedEmployee(null)
                        : setSelectedEmployee(employee)
                    }
                    employee={employee}
                    toggleIsAddPageOpen={toggleIsOpen}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {isAddPageOpen && (
        <AddEmployee
          toggleIsOpen={toggleIsOpen}
          employee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
        />
      )}
    </div>
  );
}
