import { useEffect, useState } from "react";
import loginImg from "../assets/auth_logo.png";
import SiginWith from "../components/SignInWith";
import { signinwith } from "../../fakedata";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Axios from "../api/server";
import { useNavigate } from "react-router-dom";
const Login = () => {
const [token, setToken ] = useState()

const onGoogleLogin = useGoogleLogin({
  onSuccess: (tokenResponse) => setToken(tokenResponse.access_token),
})

const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          const { email, name } = res.data;
          const response = await Axios.post("/auth/googleLoginWithExpiry", {
            username: name,
            email: email,
          });

          const {
            token,
            user: { username, id },
          } = response.data.data;

          localStorage.clear();
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          localStorage.setItem("id", id);
          navigate("/");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const onAppleLogin = () => {};

  return (

    <div className="">
      <img
        className="absolute left-0 sm:bottom-[-300px] sm:block   object-cover xsm:hidden w-[1100px] h-[800px]"
        src={loginImg}
        alt=""
      />
      <h1 className="text-3xl font-semibold text-center mt-[80px]">
        Get Personalized news stories everyday.
        <br />
        Create a free account now.
      </h1>
      <div className="w-full flex justify-center items-center flex-col gap-5 mt-10  ">
        {signinwith.map((item) => {
          return (
            <SiginWith
              key={item.id}
              item={item}
              onClick={
                item.title.toLowerCase() === "sign in with google"
                  ? onGoogleLogin
                  : onAppleLogin
              }
            />
          );
        })}
      </div>
    </div>
  );
}


export default Login

