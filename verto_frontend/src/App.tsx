import EmployeesPage from "./pages/EmployeesPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="py-[2%] pl-[5%] pr-[2%] bg-[var(--color-card)] w-screen h-screen">
        <EmployeesPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
