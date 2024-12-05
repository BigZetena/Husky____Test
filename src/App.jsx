import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const mem = "mems"

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
