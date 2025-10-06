import type { Employee } from "../types/employee";
import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";
import { getDepartmentLabels, getRoleLabels } from "../utils/getLabels";
import { formatDate } from "../utils/formatDates";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const avatarSvg = useMemo(() => {
    return createAvatar(lorelei, {
      seed: `${employee.id}-${employee.name}`,
      size: 100,
    }).toDataUri();
  }, [employee.id, employee.name]);

  return (
    <div className="employee-card w-full flex flex-row bg-[var(--color-card)] my-3 rounded-2xl py-4 px-6 justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
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

      <div className="contact-info flex flex-col justify-start text-right text-gray-700">
        <div className="email my-1 text-sm">{employee.email}</div>
        <div className="phone my-1 text-sm">{employee.phone}</div>
        <div className="doj my-1 text-sm">
          {formatDate(employee.dateOfJoining.toString())}
        </div>
      </div>
    </div>
  );
}
