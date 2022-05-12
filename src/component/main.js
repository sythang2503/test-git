import React from "react";
import "./main.css";
import { axiosCustom } from "./login";
import { useNavigate } from "react-router-dom";




function FormLogin() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };
  const onApply = () => {
    navigate("/apply");
  };
  const FormLoad =()=>{
    window.location.reload();
    navigate("/");
  }

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

  return (
    <>
      <div className="">
        <div>
          {/* Header */}

          <div className="bg-gray-600 h-10">
            <div className="flex justify-between mx-20 h-full ">
              <div className="flex text-white text-center mt-2 ml-10">
                <div className="flex text-amber-400">
                  <div className="">
                    <i className="fa fa-phone "></i>
                  </div>
                  <p className="mr-5 ml-2 hover:placeholder:">0123456789</p>
                </div>
                <div className="flex ml-8 text-amber-400">
                  <div>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <p className="ml-2">info@gmail.com</p>
                </div>
              </div>
              <div className="py-2 px-4 text-lg ">
                <button className="text-amber-300 hover:text-cyan-500"
                onClick={onClickUser}
                >
                <i class="fa-solid fa-warehouse"></i>
                </button>
              </div>
              <div className="flex mr-5">
                <div className="bg-yellow-400 px-6  rounded-l-md hover:bg-amber-500 active:bg-yellow-300">
                  <button className="mt-2" onClick={onApply}>
                    Apply Now
                  </button>
                </div>
                <div className="bg-yellow-400 px-6 rounded-r-md hover:bg-amber-500 active:bg-yellow-300 ">
                  <button className="mt-2" onClick={onLogin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around mx-8 h-14 pt-3">
            <div className="pl-5">
              <button className="text-3xl font-serif">English Center</button>
            </div>
            <div className="flex  py-2 mx-20">
              <button className="mx-6" onClick={FormLoad}>
                Home
              </button>
              <button className="mx-6">Menu</button>
              <button className="mx-6">Class</button>
              <button className="mx-6">Course</button>
              <button className="mx-6">Blog</button>
            </div>
            <div>
              <form className="flex ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-8 pl-3 border rounded-full"
                />
                <button className="-ml-9 py-1 p-3">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <div></div>
              </form>
            </div>
          </div>
        </div>

        {/* Khóa học */}

        <div>
          <div className=" w-full h-96 bg-link-main">
            <div className="pt-28 object-cover from-gray-600 to-gray-700">
              <div className="text-center text-7xl text-lime-700 font-bold pt-40 mt-12">
                <h1>
                  Better Education For A <br /> Better World
                </h1>
              </div>
              <div className="text-center mt-12 ">
                <button
                  className="px-5 py-2 border rounded-full
                             bg-yellow-500 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-4 grid-cols-3 text-center mx-10 mt-5">
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
              <div className="bg-lime-200 rounded-tl-3xl rounded-br-3xl my-5 h-40">
                <div className="py-3 font-semibold bg-lime-500 rounded-tl-3xl">
                  Khóa học ABC
                </div>
                <button
                  className="px-5 py-1 mt-14 border rounded-full
                             bg-yellow-600 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 items-center px-20 mx-20">
          <div className="">
            <div>
              <div className="font-bold text-4xl mb-5">
                <h1>Welcome To Our Campus</h1>
              </div>
              <div className="text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam architecto, ex veritatis tempora aliquid labore natus
                  autem iusto magni dicta incidunt nostrum odit veniam voluptas
                  provident minus saepe reiciendis nulla dolore delectus
                  molestias <br /> Numquam architecto, ex veritatis tempora
                  aliquid labore natus autem iusto magni dicta incidunt nostrum
                  odit veniam voluptas provident
                </p>
              </div>
            </div>
            <div className="text-center mt-5 ">
              <button
                className="px-5 py-1 mt-5 border rounded-full
                             bg-yellow-400 font-bold
                             hover:bg-amber-500 active:bg-yellow-300"
              >
                Read more
              </button>
            </div>
          </div>
          <div>
            <div className="h-96">
              <img
                src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g1.jpg"
                className="w-full h-full rounded-lg "
              />
            </div>
          </div>
          <div></div>
        </div>

        {/* Footter */}

        <div className="mb-5">
          <div>
            <div className="h-96 bg-slate-700 flex justify-around">
              <div>
                <div className="font-serif text-2xl text-white mt-8 mb-6">
                  <h1>Constact VN</h1>
                </div>
                <div>
                  <button className="flex my-2 ">
                    <div className="text-amber-500">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <p className="mr-5 ml-3 text-white font-extralight">
                      639 Nguyễn Tất Thành, quận Thanh Khê, TP.Đà Nẵng
                    </p>
                  </button>
                  <button className="flex my-2 text-white  hover:text-amber-400">
                    <div className="text-amber-500">
                      <i className="fa fa-phone "></i>
                    </div>
                    <button className="mr-5 ml-2 font-extralight">
                      0123456789
                    </button>
                  </button>
                  <button className="flex my-2 text-white hover:text-amber-400">
                    <div className="text-amber-500">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <button className="ml-2 font-extralight">
                      info@gmail.com
                    </button>
                  </button>
                  <div className="text-center">
                    <button className="text-3xl p-2 mx-1 rounded-full hover:text-sky-700">
                      <i class="fa-brands fa-facebook"></i>
                    </button>
                    <button className="text-3xl p-2 mx-1 rounded-full hover:text-sky-400">
                      <i class="fa-brands fa-twitter"></i>
                    </button>
                    <button className="text-3xl p-2 mx-1 rounded-full hover:text-pink-600">
                      <i class="fa-brands fa-instagram-square"></i>
                    </button>
                    <button className="text-3xl p-2 mx-1 rounded-full hover:text-sky-500">
                      <i class="fa-brands fa-skype"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <div className="mt-8 mb-6">
                  <h1 className="font-serif text-2xl ">Featured Links</h1>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif"> Graduation</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Admissions</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Book Store</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">International</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Courses</button>
                </div>
              </div>
              <div className="text-white">
                <div className="mt-8 mb-6">
                  <h1 className="font-serif text-2xl ">Quick Links</h1>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif"
                  onClick={FormLoad}>Home</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Menu</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Class</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Course</button>
                </div>
                <div className="my-2 hover:text-yellow-300">
                  <button className="font-serif">Blog</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormLogin;
