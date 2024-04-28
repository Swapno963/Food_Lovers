"use client";
import { handelServerFav } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useState } from "react";

// for tost
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookShare from "./FacebookShare";

export default function Actions({ foodId }) {
  const { auth, setAuth } = useAuth();
  const isAlreadyFav = auth?.favourites?.find((fv) => fv == auth._id);
  const [fav, setFav] = useState(isAlreadyFav);

  const hanfrlaFav = () => {
    try {
      // console.log("our auth is :", auth, "fav", fav);
      if (!auth) {
        toast.warn("Please Login To Mark Favourite!");
      } else {
        handelServerFav(foodId, auth._id);
        setFav(!fav);
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex gap-4 justify-end">
      <ToastContainer />

      <div
        onClick={hanfrlaFav}
        className={`flex gap-2 ${
          fav && "text-red-800"
        } text-gray-600 cursor-pointer hover:text-[#eb4a36]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span>Favourite</span>
      </div>

      <FacebookShare />
    </div>
  );
}
