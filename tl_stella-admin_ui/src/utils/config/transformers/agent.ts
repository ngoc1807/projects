import { getDepartmentByRole } from "src/components/forms/onboarding/common/data/roles";
import { EmployeeDirectoryItem } from "src/features/onboarding/onboarding.types";

interface AgentInfo {
  Name?: string;
  DefaultGroup: boolean;
  Group: boolean;
  Language: string[];
  Email?: string;
  Mobile?: string;
  Role?: string;
  Extension?: string;
  FirstName?: string;
  LastName?: string;
}

const getEmployeesFormData = (value: AgentInfo[]): EmployeeDirectoryItem[] => {
  const employees: EmployeeDirectoryItem[] = (
    value.filter((agent) => agent.FirstName) || []
  ).map((employee, index) => ({
    name: employee.Name,
    phone: employee.Extension,
    email: "",
    department: employee.Role ? getDepartmentByRole(employee.Role) : "",
    role: employee.Role || "",
    cell: employee.Mobile || "",
    id: index.toString(),
  }));
  return employees;
};

export { getEmployeesFormData };
