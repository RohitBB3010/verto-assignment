import type { Dispatch, SetStateAction } from "react";
import { Roles, type Role } from "../constants/enums";

export default function FiltersPanel({
    searchTerm,
    filterRole,
  setSearchTerm,
  setFilterRole,
}: {
    searchTerm : string,
    filterRole : Role | null
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setFilterRole: Dispatch<SetStateAction<Role | null>>;
}) {
  return (
    <div className="filters-panel w-[25%] bg-[var(--color-primary)] h-full rounded-tl-md rounded-bl-md p-6 flex flex-col gap-6">

      <div className="text-3xl font-bold text-white border-b border-white/30 pb-3">
        Filters
      </div>


      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Search</label>
        <input
        value={searchTerm}
          placeholder="Name or Email"
          className="w-full h-10 rounded-md py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/70"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Role</label>
        <select
        value={filterRole ?? ""}
          className="w-full h-10 rounded-md py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/70"
          onChange={(e) =>
            setFilterRole(
              e.target.value
                ? (e.target.value as
                    | "INTERN"
                    | "JUNIOR_ENGINEER"
                    | "SENIOR_ENGINEER"
                    | "PROJECT_MANAGER"
                    | "TEAM_LEAD"
                    | "DEVOPS_ENGINEER"
                    | "HR_ASSOCIATE"
                    | "SALES_JUNIOR_EXECUTIVE"
                    | "SALES_SENIOR_EXECUTIVE")
                : null
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


      <button
        onClick={() => {
          setSearchTerm("");
          setFilterRole(null);
        }}
        className="mt-auto w-full py-2 bg-white text-[var(--color-primary)] font-semibold rounded-md hover:bg-white/90 transition"
      >
        Clear Filters
      </button>
    </div>
  );
}
