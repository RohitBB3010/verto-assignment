import EmployeesPage from "./pages/EmployeesPage";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="py-[2%] pl-[5%] pr-[2%] bg-[var(--color-card)] w-screen h-screen">
        <EmployeesPage />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
