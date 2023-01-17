import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Navbar />
        <div className="ml-[68px] md:ml-[236px] mt-[68px] pr-[16px]">
          <Outlet />
        </div>
      </main>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}
