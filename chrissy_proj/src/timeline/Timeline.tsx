import React, { useState } from "react";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import Breads from "../Breads.tsx";
import Brownies from "../Brownies.tsx";
import Cakes from "../Cakes.tsx";
import Cookies from "../Cookies.tsx";
import "../style.css";
import CakeIcon from '@mui/icons-material/Cake';

// see https://youtu.be/SqcY0GlETPk?t=3148
export interface PostProps {
  user: string;
  image_url: string;
  image_alt: string;
  timestamp: string;
  likes: number;
}

function Timeline() {
  const [view, setView] = useState("");

  const display = (event) => {
    setView(event.target.name);
  }

  return (
    <div>
      <header className="flex items-center justify-start p-4 bg-pink-100">
        <h1 className="text-3xl font-bold text-white">Epicing Baking Website</h1>
        <CakeIcon style={{ fontSize: '2rem', marginLeft: '10px' }} />
      </header>
      <div className="flex justify-center space-x-8 text-center mb-10 bg-pink-100">
        {view==='cookies' && <Cookies />}
        {view==='brownies' && <Brownies />}
        {view==='breads' && <Breads />}
        {view==='cakes' && <Cakes />}
        {view==='' &&
          <div>
            <div className="flex justify-center space-x-8 text-center mb-10">
              <div className="mt-8">
                <img name="cookies" src="https://lh3.googleusercontent.com/proxy/0Ke-So2XTtezVf7Hy_NDP8QjPaJdTjQg1JNQ2tX2VuG2ruf3vp1ByE-Y5xlrvjsw9BjmlwLgtm0u6AOKwobSEW2tDZkLOVI03OieT8a9XGNKkfSX3mlplHLTdZB9lYCL0O7x9I4" alt="Cookies" className="w-24 h-24 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" onClick={display} />
                <p className="mt-2 text-lg font-medium text-gray-700">Cookies</p>
              </div>
            </div>
            <div className="flex justify-center space-x-8 text-center mb-10">
              <div className="mt-8">
                <img name="brownies" src="https://cakesbymk.com/wp-content/uploads/2023/01/Template-Size-for-Blog-Photos-15-802x1024.jpg" alt="Brownies" className="w-24 h-24 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" onClick={display} />
                <p className="mt-2 text-lg font-medium text-gray-700">Brownies</p>
              </div>
            </div>
            <div className="flex justify-center space-x-8 text-center mb-10">
              <div className="mt-8">
                <img name="breads" src="https://pastryandbeyond.com/wp-content/uploads/2023/05/Lemon-Loaf-featured.jpg" alt="Breads/Loaves" className="w-24 h-24 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" onClick={display} />
                <p className="mt-2 text-lg font-medium text-gray-700">Breads/Loaves</p>
              </div>
            </div>
            <div className="flex justify-center space-x-8 text-center mb-10">
              <div className="mt-8">
                <img name="cakes" src="https://www.foodandwine.com/thmb/HXQZrJNlb-fIOwJfhhQupjvEuBw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chantilly-Cream-Cake-FT-RECIPE0423-b012a9c7b8ed419f83a219f8ef9201e8.jpg" alt="Cakes" className="w-24 h-24 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" onClick={display} />
                <p className="mt-2 text-lg font-medium text-gray-700">Cakes</p>
              </div>
            </div>
          </div>
        }
      </div>
      {/* <div className="p-4 bg-white ml-auto mr-8">
        <h2 className="text-lg font-bold mb-2">About Us</h2>
        <p>Chrissy, Jackson, and Victoria are avid chefs (see the hats) who linked up one fateful day in their DCS short term. One night Chrissy had a prophetic vision of a website that contained all their favorite recipes. They immediately set out to work and a few days later, this site is the result. Enjoy!</p>
      </div> */}
    </div>
  );
}

export default Timeline;
