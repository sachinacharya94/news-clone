
import { useSelector } from "react-redux";

function SiginWith({ item, onClick }) {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      style={{ backgroundColor: darkMode ? "#3f424a" : "whitesmoke" }}
      className="flex flex-row items-center justify-center gap-3 bg-gray-100 sm:w-[360px] py-4 rounded-lg shadow-md z-50 xsm:w-10/12 cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      {item.icon}
      <p>{item.title}</p>
    </div>
  );
}

export default SiginWith;