import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>welcome home</div>
      <Outlet />
    </>
  );
};

export default HomePage;
