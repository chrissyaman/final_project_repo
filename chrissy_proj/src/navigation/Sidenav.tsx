import React from "react";
import "../style.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import ReelsIcon from "@mui/icons-material/SlideshowOutlined";
import MessagesIcon from "@mui/icons-material/SendOutlined";
import NotificationsIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CreateIcon from "@mui/icons-material/AddBoxOutlined";
import MoreIcon from "@mui/icons-material/MenuOutlined";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logoutUser } from "../features/userSlice";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const refresh = () => {
    window.location.reload();
  }

  let url =
    "https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png";

  return (
    <div className="fixed flex flex-col justify-between z-1">
      <div className="flex flex-col">
        <button className="sidenav__button" onClick={refresh}>
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <Avatar>
              {user.username ? user.username.charAt(0).toUpperCase() : "A"}
            </Avatar>
          </div>
          <span>
            {user.username}{" "}
            <button
              onClick={handleLogout}
              className="text-[15px] rounded-[10px] font-bold font-white bg-darkgray p-[10px] border-none hover:cursor-pointer hover:bg-slightgray"
            >
              Log out
            </button>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;