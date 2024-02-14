import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category, Home, Layout, Login, News, NotFound, Bookmarks } from "./pages";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const darkMode = useSelector((state)=>state.darkMode.value)

  useEffect(() => {
    document.body.style.backgroundColor= darkMode? "black": "white";
    document.body.style.color= darkMode? "white": "black";
  }, [darkMode])
  // console.log(import.meta.env.VITE_MY_GOOGLE_LOGIN_CLIENT_ID,"123")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/news/category/:id" element={<Category />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
