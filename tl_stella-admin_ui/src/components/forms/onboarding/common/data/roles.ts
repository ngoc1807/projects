const departments = [
  "Sales",
  "Parts",
  "Service",
  "Body Shop",
  "Billing",
  "Admin",
  "Marketing",
  "BDC",
] as const;

type Department = typeof departments[number];

interface EmployeeRole {
  title: string;
  department: Department;
}

const roles: EmployeeRole[] = [
  {
    title: "Sales Manager",
    department: "Sales",
  },

  {
    title: "Sales Associate",
    department: "Sales",
  },

  {
    title: "Used Car Manager",
    department: "Sales",
  },

  {
    title: "Preowned Salesperson",
    department: "Sales",
  },

  { title: "Parts Manager", department: "Parts" },

  { title: "Parts Counter", department: "Parts" },

  { title: "Service Manager", department: "Service" },

  { title: "Service Director", department: "Service" },

  { title: "Service Advisor", department: "Service" },

  { title: "Body Shop Manager", department: "Body Shop" },

  { title: "Cashier", department: "Billing" },

  { title: "Chief Financial Officer", department: "Billing" },

  { title: "Manager", department: "Admin" },

  { title: "General Manager", department: "Admin" },

  { title: "Desk Manager", department: "Admin" },

  { title: "Internet Manager", department: "Admin" },

  { title: "Office Manager", department: "Admin" },

  { title: "Marketing Director", department: "Marketing" },

  { title: "Advertising Director", department: "Marketing" },

  { title: "BDC Manager", department: "BDC" },
];

const getRolesByDepartment = (department: Department) =>
  (roles.filter((role) => role.department === department) || []).map(
    (role) => ({
      name: role.title,
      value: role.title.replace(/\s/g, ""),
    })
  );

const getDepartmentByRole = (role: string) =>
  roles.find((r) => r.title.replace(/\s/g, "") === role)?.department;

export { roles, departments, getRolesByDepartment, getDepartmentByRole };
