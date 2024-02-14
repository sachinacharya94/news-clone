import  { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoBookmarks } from "react-icons/io5";
import { IoBookmarksOutline } from "react-icons/io5";
import useLocalStorageGetItem from "../../hooks/useLocalStorageGetItem";
import { BASE_URL } from "../api/server";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const [clicked, setClicked] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.value);

  const user = useLocalStorageGetItem("username");

  const token = useLocalStorageGetItem("token");

  const navigate = useNavigate();

  const toggleBookmarks = async (e) => {
    e.stopPropagation();
    try {
      await axios.post(
        `${BASE_URL}users/bookmarks/toggleOrAddBookmark`,
        { newsId: item.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      setClicked((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => navigate(`/news/${item.id}`)}
      className="w-full cursor-pointer relative"
    >
      {user ? (
        clicked ? (
          <IoBookmarks
            onClick={(e) => toggleBookmarks(e)}
            className="absolute z-50 top-[8px] left-[8px] hover:scale-125 transition delay-150 duration-100 ease-in-out"
            color={"green"}
            size={27}
          />
        ) : (
          <IoBookmarksOutline
            onClick={(e) => toggleBookmarks(e)}
            className="absolute z-50 top-[8px] left-[8px] hover:scale-125 transition delay-150 duration-100 ease-in-out"
            color={"green"}
            size={27}
          />
        )
      ) : null}
      <div className="w-full relative">
        <img
          src={item.image}
          alt=""
          className="w-full h-[280px] object-fill rounded-xl"
        />
        <div
          style={{
            color: darkMode ? "white" : "black",
            backgroundColor: darkMode ? "#3F424A" : "#E6E7E9",
          }}
          className="bg-white w-11/12 font-medium drop-shadow-lg px-5 py-3 mx-auto text-sm absolute right-[0px] left-[0px] bottom-[-25px]"
        >
          {item.title}
        </div>
      </div>
      <p
        style={{ color: darkMode ? "lightgray" : "gray" }}
        className="mt-10 text-gray-700 text-sm"
      >
        {item.previewText?.length > 110
          ? item.previewText?.slice(0, 110) + "..."
          : item.previewText?.length}
      </p>
      <div className="w-full flex justify-between mt-5 items-end">
        <div className="bg-categorygreen text-appgreen rounded-xl px-5 py-1">
          {item?.topics[0].name}
        </div>
        <div className="text-appgreen flex gap-[5px] items-center">
          <p className="underline">Continue Reading</p>
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </div>
  );
}

export default Card;
