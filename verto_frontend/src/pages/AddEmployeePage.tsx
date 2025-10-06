import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import { Departments, type Department, type Role } from "../constants/enums";

type AddEmployeeInput = {
  name: string;
  email: string;
  phone: string;
  role: Role;
  department: Department;
  dateOfJoining: Date;
};

export default function AddEmployee({
  toggleIsOpen,
}: {
  toggleIsOpen: () => void;
}) {
  const { register, handleSubmit } = useForm<AddEmployeeInput>();
  return (
    <div className="add-page fixed inset-0 z-50 flex justify-center items-start py-10">
      <div className="fixed inset-0 bg-black/50" onClick={toggleIsOpen}></div>

      <div className="modal-content flex flex-col bg-[var(--color-background)] z-50 justify-center items-center w-[30%] rounded-lg shadow-lg p-4">
        <div className="title flex w-full justify-between items-center mb-4">
          <div></div>
          <div className="text-xl font-semibold">Add Employee</div>
          <button
            className="text-red-700 text-xl cursor-pointer"
            onClick={toggleIsOpen}
          >
            <FiX />
          </button>
        </div>
        <input {...register('name')} placeholder="Name" className="w-[85%] bg-gray-200 h-8 py-2 px-2 my-2 rounded-sm border-none"></input>
        <input {...register('email')} placeholder="Email" className="w-[85%] bg-gray-200 h-8 py-2 px-2 my-2 rounded-sm border-none"></input>
        <input {...register('phone')} placeholder="Phone" className="w-[85%] bg-gray-200 h-8 py-2 px-2 my-2 rounded-sm border-none"></input>
        <select {...register('department')} >
            { Departments.map((d) => {
                return <option key={d.value} value={d.value}>{d.label}</option>
            }) }
        </select>
      </div>
    </div>
  );
}2