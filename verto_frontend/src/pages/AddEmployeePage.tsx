import { FiX } from "react-icons/fi";

export default function AddEmployee({
  toggleIsOpen,
}: {
  toggleIsOpen: () => void;
}) {
  return (
    <div className="add-page fixed inset-0 z-50 flex justify-center items-start py-10">
      <div className="fixed inset-0 bg-black/50" onClick={toggleIsOpen}></div>

      <div className="modal-content flex flex-col bg-[var(--color-background)] z-50 justify-center items-center w-[30%] rounded-lg shadow-lg p-4">
        <div className="title flex w-full justify-between items-center mb-4">
          <div></div>
          <div className="text-xl font-semibold">Add Employee</div>
          <button className="text-red-700 text-xl" onClick={toggleIsOpen}>
            <FiX />
          </button>
        </div>
      </div>
    </div>
  );
}
