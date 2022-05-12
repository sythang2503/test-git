import React from "react";
import "./main.css";
import {useNavigate} from "react-router-dom"

function FormApply() {
  const navigate = useNavigate();
  const backMain= ()=>{
    navigate("/")
  }

  return (
    <>
      <div className=" w-full h-full bg-link-apply">
        <span
          className="text-cyan-500 text-2xl p-5 m-5 hover:text-sky-300 "
          onClick={backMain}
        >
          <i class="fa-solid fa-circle-arrow-left"></i>
        </span>
        <div className="pt-28 object-cover">
          <div className="border-x-8 border-y-2 text-left h-96 p-5 mx-52 rounded-3xl bg-opacity-5 drop-shadow-2xl">
            <div>
              <form className="mt-3">
                <div className="grid gap-4 grid-cols-2">
                  <div className="p-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="h-10 pl-3 min-w-full border rounded-md "
                    />
                  </div>
                  <div className="p-2 ">
                    <input
                      type="text"
                      placeholder="Email"
                      className="h-10 pl-3 min-w-full border rounded-md "
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="h-10 pl-3 min-w-full border rounded-md "
                    />
                  </div>
                </div>
                <div className="p-2 pt-5 grid gap-4 grid-cols-1">
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="h-28 pl-3 p-3 border rounded-md resize-none"
                  />
                </div>
              </form>
              <div className="text-right ">
                <button
                  className="px-6 py-1 mt-6 mx-2 border rounded-full
                             bg-yellow-500 font-bold
                             hover:bg-amber-600 active:bg-yellow-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormApply;
