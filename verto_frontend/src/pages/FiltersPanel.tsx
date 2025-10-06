import type { Dispatch, SetStateAction } from "react";
import { Roles, type Role } from "../constants/enums";

export default function FiltersPanel({
  setSearchTerm,
  setFilterRole,
}: {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setFilterRole: Dispatch<SetStateAction<Role | null>>;
}) {
  return (
    <div className="filters-panel w-[25%] bg-[var(--color-primary)] h-full rounded-tl-md rounded-bl-md p-4">
      <div className="title text-2xl font-semibold text-white pt-1 pb-3">
        Filters
      </div>
      <input
        placeholder="Search by name or email"
        className="w-[95%] h-8 rounded-sm py-1 px-2 bg-white text-gray-800 focus:outline-none"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col py-5">
        <label htmlFor="roleFilter" className="mb-1 text-lg text-white font-semibold">
          Filter by Role
        </label>
        <select
          id="roleFilter"
          className="w-[95%] h-8 rounded-sm py-1 px-2 bg-white text-gray-800 focus:outline-none"
          onChange={(e) =>
            setFilterRole(
              e.target.value as
                | "INTERN"
                | "JUNIOR_ENGINEER"
                | "SENIOR_ENGINEER"
                | "PROJECT_MANAGER"
                | "TEAM_LEAD"
                | "DEVOPS_ENGINEER"
                | "HR_ASSOCIATE"
                | "SALES_JUNIOR_EXECUTIVE"
                | "SALES_SENIOR_EXECUTIVE"
                | null
            )
          }
        >
          <option value="">All Roles</option>
          {Object.values(Roles).map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
