import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="my-10 w-11/12 mx-auto">
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
