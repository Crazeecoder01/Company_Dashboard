type Employees = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
  };
  
  type EmployeeTableProps = {
    employees: Employees[];
    onRowClick?: (employee: Employees) => void
  };
  
  export const EmployeeTable = ({ employees, onRowClick }: EmployeeTableProps) => {
    return (
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <div className="p-4 text-lg font-bold">
            <h3>Employee Management</h3>
        </div>
        <div className="m-4">
            <table className="min-w-full text-sm text-left text-gray-700 border border-none">
            <thead className="bg-blue-100 uppercase text-xs  font-semibold text-blue-800">
                <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Status</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr
                    key={employee.id}
                    className="border-t border-gray-200 hover:bg-blue-50 transition"
                    onClick={() => onRowClick && onRowClick(employee)}
                    >
                    <td className="px-6 py-4">{employee.name}</td>
                    <td className="px-6 py-4">{employee.email}</td>
                    <td className="px-6 py-4">{employee.role}</td>
                    <td className="px-6 py-4">
                    <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                            employee.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                    >
                        {employee.status}
                    </span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    );
  };
  