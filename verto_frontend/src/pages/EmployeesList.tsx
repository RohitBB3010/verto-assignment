import CustomButton from "../components/CustomButton";

export default function EmployeesList({}) {
  return (
    <div className="main-page py-6 px-6 flex-1">
      <div className="title-row flex flex-row justify-between">
        <div className="title text-4xl font-semibold">Employee Management</div>
        <CustomButton buttonText="Add New Employee" onClick={() => {}} />
      </div>
    </div>
  );
}
