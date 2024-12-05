import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const mem = "mem"

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
