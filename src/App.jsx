import { Outlet } from "react-router-dom";

function App() {
  return (
    // <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white p-4">
    //   <Outlet />
    // </div>

    <div className="min-h-screen bg-white text-black">
      <Outlet />
    </div>
  );
}

export default App;
