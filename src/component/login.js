import React from "react";
import "./main.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const axiosCustom = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    Authorization: "Basic VFJBSU5JTkdfV0VCOlRSQUlOSU5HX1dFQl9PQVVUSA==",
  },
  withCredentials: true,
});

function FormLogin() {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const onClickUser = () => {
    axiosCustom.defaults.headers.Authorization =
      "Bearer" + localStorage.getItem("USER_TOKEN");
    axiosCustom.get("api/user/role").then((response) => {
      let roleUser = response.data.data.role;
      if (roleUser === 0) {
        navigate("/admin");
      } else if (roleUser === 2) {
        navigate("/");
      }
    });
  };
  const navigate = useNavigate();
  const onLogin = async (dataElement) => {
    let FormData = require("form-data");
    let data = new FormData();
    data.append("password", dataElement.password);
    data.append("username", dataElement.userName);
    data.append("grant_type", "password");
    axiosCustom.post("/oauth/token", data).then((response) => {
      localStorage.setItem("USER_TOKEN", response.data.access_token);
      onClickUser();
    });
  };
  const backMain = () => {
    navigate("/");
  };

  const handelChange = (e) => {
    setData((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };

  // https://i0.wp.com/www.macpherson-institute.de/upload/I-Can-Do-It-FB-edit-1024x538.jpg?resize=1024%2C538
  return (
    <>
      <div className="w-full h-96 bg-link-login">
        <span
          className="text-2xl p-5 m-5 hover:text-sky-600 "
          onClick={backMain}
        >
          <i class="fa-solid fa-circle-arrow-left"></i>
        </span>
        <div className="h-96 pt-32 object-cover">
          <div className="border-x-8 border-y-2 text-center p-5 mx-96 rounded-3xl drop-shadow-2xl bg-slate-400">
            <div className="font-serif text-black text-2xl text-center">
              <h3>Sign in with</h3>
            </div>
            <div className="flex justify-evenly">
              <div className="text-center">
                <div>
                  <button className="flex  text-3xl p-2 mx-1 rounded-full hover:text-sky-700">
                    <span className="mx-2">
                      <i class="fa-brands fa-facebook"></i>
                    </span>
                    <h3 className="text-2xl">Facebook</h3>
                  </button>
                </div>
                <div>
                  <button className="flex  text-3xl p-2 mx-1 rounded-full hover:text-yellow-400">
                    <span className="mx-2">
                      <i class="fa-brands fa-google-plus"></i>
                    </span>
                    <h3 className="text-2xl">Google</h3>
                  </button>
                </div>
                <div>
                  <button className="flex  text-3xl p-2 mx-1 rounded-full hover:text-pink-600">
                    <span className="mx-2">
                      <i class="fa-brands fa-instagram-square"></i>
                    </span>
                    <h3 className="text-2xl">Instagram</h3>
                  </button>
                </div>
                <div>
                  <button className="flex  text-3xl p-2 mx-1 rounded-full hover:text-sky-500">
                    <span className="mx-2">
                      <i class="fa-brands fa-skype"></i>
                    </span>
                    <h3 className="text-2xl">Skype</h3>
                  </button>
                </div>
              </div>
              <div className="border-l-2 border-gray-600 pl-5">
                <div className="mt-3 ">
                  <form>
                    <div className="p-2">
                      <input
                        id="userName"
                        type="text"
                        placeholder="Email"
                        className="h-10 pl-3 w-64 border rounded-md "
                        onChange={handelChange}
                        value={data.userName}
                        name="userName"
                      />
                    </div>
                    <div className="p-2">
                      <input
                        id="passWord"
                        type="password"
                        placeholder="PassWord"
                        className="h-10 pl-3 w-64 border rounded-md "
                        onChange={handelChange}
                        value={data.password}
                        name="password"
                      />
                    </div>
                  </form>
                  <div className="text-xl font-light text-left ml-2 mt-3">
                    <input
                      type="checkbox"
                      id="check"
                      name="check"
                      value="check"
                    />
                    <label htmlFor="check" className="text-black ml-2">
                      Remember me
                    </label>
                  </div>
                  <div className="text-right mr-3 ">
                    <button
                      onClick={() => onLogin(data)}
                      className="px-5 py-2 mt-8 border rounded-full
                             bg-amber-500 font-bold
                             hover:bg-yellow-600 active:bg-yellow-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormLogin;
