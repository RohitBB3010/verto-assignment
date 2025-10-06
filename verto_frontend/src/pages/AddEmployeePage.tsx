import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import { Departments, type Department, type Role } from "../constants/enums";
import CustomButton from "../components/CustomButton";
import FormInput from "../components/FormInput";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddEmployeeInput>({
    mode: "onChange",
  });

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

        <FormInput
          register={register}
          placeHolder="Name"
          fieldName="name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long",
            },
          }}
          error={errors.name}
        />
        <FormInput
          register={register}
          placeHolder="Email"
          fieldName="email"
          rules={{
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
              message: "Enter a valid email address",
            },
          }}
          error={errors.email}
        />
        <FormInput
          register={register}
          placeHolder="Phone"
          fieldName="phone"
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Phone number is invalid",
            },
          }}
          error={errors.phone}
        />
        <div className="flex flex-row justify-between w-[80%] my-2">
          <div> Select role : </div>
          <select
            {...register("department")}
            className="py-1 px-1 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-200 rounded-sm"
          >
            {Departments.map((d) => {
              return (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-row justify-between w-[80%] my-3">
          <div>Date Of Joining</div>
          <input
            type="Date"
            className="py-1 px-1 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-200 rounded-sm cursor-pointer"
          ></input>
        </div>
        <CustomButton
          onClick={() => {}}
          buttonText="Add Employee"
          containerClass="my-3"
        />
      </div>
    </div>
  );
}
