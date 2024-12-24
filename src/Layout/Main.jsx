import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="w-[1200px] mx-auto mt-10">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;