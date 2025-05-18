  import { useState } from "react";
import { EmployeeTable } from "../components/EmployeeTable";
  import Navbar from "../components/Navbar";
  import { SideBar } from "../components/SideBar";
  import employees from "../data/employees.json";
import { Modal } from "../components/Modal";

  type Employee = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
  };
  export const EmployeeDashboard = () => {
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRowClick = (employee: Employee) => {
      setSelectedEmployee(employee);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setTimeout(() => setSelectedEmployee(null), 300);
    };
      return (
        <div className="flex transition-all duration-300 ease-in-out bg-[#0D1B2A]">
          <SideBar />
        <div className="bg-blue-100 w-full h-full">
            <Navbar />
          <div className="p-6  lg:px-[150px]">
            <p className="text-xl font-bold mb-4">Dashboard/Employee Management</p>
            <EmployeeTable employees={employees}  onRowClick={handleRowClick}/>
          </div>
        </div>
          {isModalOpen && selectedEmployee && (
          <Modal onClose={closeModal}>
            <EmployeeDetails employee={selectedEmployee} />
          </Modal>
        )}
        </div>
        );
  }

  const EmployeeDetails = ({ employee }: { employee: Employee }) => {
    return (
      <div className="space-y-3 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">{employee.name}</h2>
        <p>
          <strong>ID:</strong> {employee.id}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Role:</strong> {employee.role}
        </p>
        <p>
          <strong>Status:</strong> {employee.status}
        </p>
      </div>
    );
  };