import type { Employee } from "../types/employee";
import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo, useState } from "react";
import { getRoleLabels } from "../utils/getLabels";
import { formatDate } from "../utils/formatDates";
import { FiDelete, FiEdit } from "react-icons/fi";

export default function EmployeeCard({
  employee,
  isMenuOpen,
  setMenuOpen,
}: {
  employee: Employee;
  isMenuOpen: boolean;
  setMenuOpen: () => void;
}) {
  const avatarSvg = useMemo(() => {
    return createAvatar(lorelei, {
      seed: `${employee.id}-${employee.name}`,
      size: 100,
    }).toDataUri();
  }, [employee.id, employee.name]);

  return (
    <div className="employee-card w-full flex flex-row bg-[var(--color-card)] my-3 rounded-2xl py-4 pl-6 pr-1 justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Left panel */}
      <div className="left-panel flex items-center">
        <img
          src={avatarSvg}
          alt={employee.name}
          className="w-16 h-16 rounded-full mr-4 shadow-sm border border-gray-200"
        />
        <div className="profile flex flex-col justify-center">
          <div className="text-xl font-semibold text-gray-900">
            {employee.name}
          </div>
          <div className="text-md text-gray-600">
            {getRoleLabels(employee.role)}
          </div>
        </div>
      </div>

      <div className="right-panel flex flex-row items-center relative">
        <div className="contact-info flex flex-col justify-start text-right text-gray-700 pr-5">
          <div className="email my-1 text-sm">{employee.email}</div>
          <div className="phone my-1 text-sm">{employee.phone}</div>
          <div className="doj my-1 text-sm">
            {formatDate(employee.dateOfJoining.toString())}
          </div>
        </div>
        <div className="relative">
          <button
            className={`px-2 text-2xl font-semibold cursor-pointer transition-colors duration-200 
      ${isMenuOpen ? 'bg-gray-400 rounded-full' : ''}`}
            onClick={setMenuOpen}
          >
            ⋮
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-1 w-32 bg-white shadow-lg rounded-md border border-gray-200 z-10 flex flex-col">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                onClick={() => {}}
              >
                <FiEdit className="mr-2" />
                Edit
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center cursor-pointer"
                onClick={() => {}}
              >
                <FiDelete className="mr-2" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
