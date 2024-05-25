import React, { useState } from "react";
import "../style.css";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

function Authentication() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="flex flex-row items-center my-0 mx-[50px]">
       <div className="flex justify-center space-x-8 text-center mb-10">
        <div className="flex flex-col items-center">
            <img src="https://lh3.googleusercontent.com/proxy/0Ke-So2XTtezVf7Hy_NDP8QjPaJdTjQg1JNQ2tX2VuG2ruf3vp1ByE-Y5xlrvjsw9BjmlwLgtm0u6AOKwobSEW2tDZkLOVI03OieT8a9XGNKkfSX3mlplHLTdZB9lYCL0O7x9I4" alt="Cookies" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700"></p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cakesbymk.com/wp-content/uploads/2023/01/Template-Size-for-Blog-Photos-15-802x1024.jpg" alt="Brownies" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700"></p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://pastryandbeyond.com/wp-content/uploads/2023/05/Lemon-Loaf-featured.jpg" alt="Breads/Loaves" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700"></p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://www.foodandwine.com/thmb/HXQZrJNlb-fIOwJfhhQupjvEuBw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chantilly-Cream-Cake-FT-RECIPE0423-b012a9c7b8ed419f83a219f8ef9201e8.jpg" alt="Cakes" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700"></p>
          </div>
        </div>
      <div className="basis-1/2">
        {active === "login" ? <Login /> : <Signup />}
        <div className="border border-solid border-gray-500 p-5 mx-[30px] text-center mt-[15px]">
          <span className="font-medium text-sm ">
            {active === "login" ? (
              <>
                {" "}
                Don't have an account?{" "}
                <button
                  className="bg-transparent text-bluish font-bold border-none hover:cursor-pointer"
                  onClick={handleChange}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                {" "}
                Have an account?{" "}
                <button
                  className="bg-transparent text-bluish font-bold border-none hover:cursor-pointer"
                  onClick={handleChange}
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;