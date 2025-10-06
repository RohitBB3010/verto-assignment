export const Departments = [
  { value: "ENGINEERING", label: "Engineering" },
  { value: "HUMAN_RESOURCES", label: "Human Resources" },
  { value: "SALES", label: "Sales" },
  { value: "MARKETING", label: "Marketing" },
  { value: "CUSTOMER_SERVICE", label: "Customer Service" },
  { value: "FINANCE", label: "Finance" },
  { value: "OPERATIONS", label: "Operations" },
  { value: "LEGAL", label: "Legal" },
] as const;

export type Department = (typeof Departments)[number]["value"];

export const Roles = [
  { value: "INTERN", label: "Intern" },
  { value: "JUNIOR_ENGINEER", label: "Junior Engineer" },
  { value: "SENIOR_ENGINEER", label: "Senior Engineer" },
  { value: "PROJECT_MANAGER", label: "Project Manager" },
  { value: "TEAM_LEAD", label: "Team Lead" },
  { value: "DEVOPS_ENGINEER", label: "DevOps Engineer" },
  { value: "HR_ASSOCIATE", label: "HR Associate" },
  { value: "SALES_JUNIOR_EXECUTIVE", label: "Sales Junior Executive" },
  { value: "SALES_SENIOR_EXECUTIVE", label: "Sales Senior Executive" },
  { value: "MARKETING_EXECUTIVE", label: "Marketing Executive" },
  { value: "FINANCE_MANAGER", label: "Finance Manager" },
  { value: "FINANCE_ANALYST", label: "Finance Analyst" },
  { value: "CUSTOMER_ASSOCIATE", label: "Customer Associate" },
] as const;

export type Role = (typeof Roles)[number]["value"];
