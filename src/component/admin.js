import React from "react";
import "./main.css";
import { axiosCustom } from "./login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  sendClass,
  sendStudent,
  sendSubject,
  sendTeacher,
  sendUpdateSubject,
} from "../axios/api";

function FormAdmin() {
  const navigate = useNavigate();
  const [infoAdmin, setInfoAdmin] = useState(false);
  const [listStudent, setListStudent] = useState(false);
  const [menuStudent, setMenuStudent] = useState(false);

  const [menuClass, setMenuClass] = useState(false);
  const [listClass, setListClass] = useState(false);
  const [showAddClass, setShowAddClass] = useState(false);
  const [dataClass, setDataClass] = useState({
    class_name: "",
    student_id: "",
    lesson_id: "",
    start_time: "",
    end_time: "",
  });

  const [listLesson, setListLesson] = useState(false);
  const [menuLesson, setMenuLesson] = useState(false);

  const showInfoAdmin = () => {
    axiosCustom.defaults.headers.Authorization =
      "Bearer" + localStorage.getItem("USER_TOKEN");
    axiosCustom.get("/api/admin/info").then((response) => {
      setInfoAdmin(response.data.data);
    });
  };
  const removeInfoAdmin = () => {
    setInfoAdmin();
  };

  const showListStudent = () => {
    axiosCustom.defaults.headers.Authorization =
      "Bearer" + localStorage.getItem("USER_TOKEN");
    axiosCustom.get("/api/admin/student").then((response) => {
      setListStudent(response.data.data);
    });
  };
  const removeStudent = () => {
    setListStudent();
  };
  // CLASS
  // Get class
  const showListClass = () => {
    axiosCustom.defaults.headers.Authorization =
      "Bearer" + localStorage.getItem("USER_TOKEN");
    axiosCustom.get("api/admin/class").then((response) => {
      setListClass(response.data.data);
    });
  };
  const removeClass = () => {
    setListClass();
  };
  // Add class
  const addInfoClass = (dataElement) => {
    sendClass(dataElement.name)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.meta.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelChangeClass = (e) => {
    setDataClass((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };
  // LESSON
  // Get lesson
  const showListLesson = () => {
    axiosCustom.defaults.headers.Authorization =
      "Bearer" + localStorage.getItem("USER_TOKEN");
    axiosCustom.get("/api/admin/lesson").then((response) => {
      setListLesson(response.data.data);
    });
  };
  const removeLesson = () => {
    setListLesson();
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const backMain = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div>
          {/* Header */}
          <div className="px-2 py-2 bg-gray-400">
            <div className="flex justify-around">
              <button className="font-serif text-2xl flex px-3 text-rose-600">
                <span
                  className="text-cyan-400 text-2xl px-2 mr-5 hover:text-teal-300 "
                  onClick={backMain}
                >
                  <i class="fa-solid fa-circle-arrow-left"></i>
                </span>
                <h1 className="">ADMIN</h1>
              </button>
              <div className="flex ">
                <div className="px-3">
                  <button className="py-1">
                    <span>
                      <i class="fa-solid fa-bars"></i>
                    </span>
                  </button>
                </div>
                <div className="px-3">
                  <form className="flex justify-around ">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="h-8 pl-3 border rounded-full"
                    />
                    <button className="-ml-9 py-1 p-3">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <button
                className="flex"
                onClick={() => showInfoAdmin(!infoAdmin)}
              >
                <h2 className="text-lg">Sy Thang</h2>
                <button className="px-1 pt-1">
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </button>
              </button>
              <div className="flex">
                <button className="px-8">
                  <span>
                    <i class="fa-solid fa-envelope-circle-check"></i>
                  </span>
                </button>
                <button className="px-8">
                  <span>
                    <i class="fa-solid fa-bell"></i>
                  </span>
                </button>
                <button className="px-8" onClick={logOut}>
                  <span>
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </span>
                </button>
              </div>
            </div>
            <div></div>
          </div>

          {/* BODY */}

          <div className="flex h-screen">
            <div className="w-32 bg-sky-400 pl-2 py-3">
              {/* Menu Student */}
              <div
                className={menuStudent && `bg-yellow-500 rounded-l-3xl px-1`}
              >
                <button
                  onClick={() => setMenuStudent(!menuStudent)}
                  className="hover:text-white px-1 py-2 "
                >
                  <label className="text-xl">Student</label>
                </button>
              </div>
              {menuStudent && (
                <div className="px-2 border-l border-lime-700">
                  <button
                    className="hover:text-white"
                    onClick={() => showListStudent(!listStudent)}
                  >
                    Student List
                  </button>
                  <button className="hover:text-white">Add Student</button>
                </div>
              )}
              {/* Menu Class */}
              <div className={menuClass && `bg-yellow-500 rounded-l-3xl px-1`}>
                <button
                  onClick={() => setMenuClass(!menuClass)}
                  className="hover:text-white px-1 py-2 "
                >
                  <label className="text-xl">Class</label>
                </button>
              </div>
              {menuClass && (
                <div className="px-2 border-l border-lime-700">
                  <button
                    className="hover:text-white"
                    onClick={() => showListClass(!listClass)}
                  >
                    Class List
                  </button>
                  <button
                    className="hover:text-white"
                    onClick={() => setShowAddClass(!showAddClass)}
                  >
                    Add Class
                  </button>
                </div>
              )}
              {/* Menu Lesson */}
              <div className={menuLesson && `bg-yellow-500 rounded-l-3xl px-1`}>
                <button
                  onClick={() => setMenuLesson(!menuLesson)}
                  className="hover:text-white px-1 py-2"
                >
                  <label className="text-xl">Lesson</label>
                </button>
              </div>
              {menuLesson && (
                <div className="px-2 border-l border-lime-700">
                  <button
                    className="hover:text-white"
                    onClick={() => showListLesson(!listLesson)}
                  >
                    Lesson List
                  </button>
                  <button className="hover:text-white">Add Lesson</button>
                </div>
              )}

              <div>
                <button></button>
              </div>
              <div>
                <button></button>
              </div>
            </div>
            <div className="w-screen bg-slate-100">
              <div>
                {infoAdmin && (
                  <div className="mx-96 px-36">
                    <div className="text-right">
                      <i
                        onClick={removeInfoAdmin}
                        className="fa-solid fa-delete-left"
                      ></i>
                    </div>
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Sex</th>
                          <th>Birthday</th>
                        </tr>
                      </thead>
                      <tbody>
                        {infoAdmin.map((info, index) => (
                          <tr key={index}>
                            <td>{info.name}</td>
                            <td>{info.sex}</td>
                            <td>{info.birthday}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {listStudent && (
                  <>
                    <i
                      onClick={removeStudent}
                      className="fa-solid fa-delete-left"
                    ></i>
                    <h1>Danh Sach Hoc Vien</h1>
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Sex</th>
                          <th>Birthday</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listStudent.map((info, index) => (
                          <tr key={index}>
                            <td>{info.student_name}</td>
                            <td>{info.sex}</td>
                            <td>{info.birthday}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
                {/* Show Class */}
                {listClass && (
                  <>
                    <i
                      onClick={removeClass}
                      className="fa-solid fa-delete-left"
                    ></i>
                    <h1>Danh Sach Lop Hoc</h1>
                    <table class="table-auto">
                      <thead>
                        <tr>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listClass.map((info, index) => (
                          <tr key={index}>
                            <td>{info.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
                {/* Show Form Add Class */}
                {showAddClass && (
                  <>
                    <h1>Add Class</h1>
                    <div className="m-28 px-40 py-10 mx-96 border-2 border-x-4 bor bg-stone-300 rounded-3xl border-sky-400">
                      <table className="text-right w-full p-10">
                        <tr>
                          <th>Name:</th>
                          <td>
                            <input
                              className="w-full"
                              onChange={handelChangeClass}
                              value={dataClass.class_name}
                              name="class_name"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Lesson ID:</th>
                          <td>
                            <input
                              className="w-full"
                              onChange={handelChangeClass}
                              value={dataClass.lesson_id}
                              name="lesson_id"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Student ID:</th>
                          <td>
                            <input
                              className="w-full"
                              onChange={handelChangeClass}
                              value={dataClass.student_id}
                              name="student_id"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Start Time:</th>
                          <td>
                            <input
                              className="w-full"
                              onChange={handelChangeClass}
                              value={dataClass.start_time}
                              name="start_time"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>End Time:</th>
                          <td>
                            <input
                              className="w-full"
                              onChange={handelChangeClass}
                              value={dataClass.end_time}
                              name="end_time"
                            />
                          </td>
                        </tr>
                      </table>
                      <div className="text-center">
                        <button
                          onClick={() => addInfoClass(dataClass)}
                          className="py-2 px-6 bg-yellow-400 mt-5 mx-10 rounded-full
                                      hover:bg-sky-300 active:bg-yellow-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {/* Show Lesson */}
                {listLesson && (
                  <>
                    <i
                      onClick={removeLesson}
                      className="fa-solid fa-delete-left"
                    ></i>
                    <h1>Danh Sach Bai Hoc</h1>
                    <table class="table-auto">
                      <thead>
                        <tr>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listLesson.map((info, index) => (
                          <tr key={index}>
                            <td>{info.lesson_name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="h-10 bg-slate-900">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormAdmin;
