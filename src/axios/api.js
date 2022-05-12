import axios from "axios";

export const sendStudent = (dataElement) => {
  return axios({
    method: "POST",
    url: "http://localhost:8081/api/admin/student",
    headers: {
      Authorization: "Bearer" + localStorage.getItem("USER_TOKEN"),
    },
    data: dataElement,
  });
};
export const sendGetStudent = (dataElement) => {
    return axios({
      method: "GET",
      url: "http://localhost:8081/api/admin/teacher",
      headers: {
        Authorization: "Bearer" + localStorage.getItem("USER_TOKEN"),
      },
      data: dataElement,
    });
  };

export const sendTeacher = (dataElement) => {
  return axios({
    method: "POST",
    url: "http://localhost:8081/api/admin/teacher",
    headers: {
      Authorization: "Bearer" + localStorage.getItem("USER_TOKEN"),
    },
    data: dataElement,
  });
};

export const sendClass = (dataElement) => {
  axios({
    method: "POST",
    url: "http://localhost:8081/api/admin/class",
    headers: {
      Authorization: "Bearer" + localStorage.getItem("USER_TOKEN"),
    },
    data: dataElement,
  });
};

export const sendSubject = (dataElement) => {
  axios({
    method: "POST",
    url: "http://localhost:8081/api/admin/subject",
    headers: {
      Authorization: "Bearer" + localStorage.getItem("USER_TOKEN"),
    },
    data: dataElement,
  });
};

export const sendUpdateSubject = (dataElement) => {
  axios({
    method: "PUT",
    url: "http://localhost:8081/api/admin/subject",
    headers: {
      Authorization: "Bearer" + localStorage.getItem("USER_TOKEN"),
    },
    data: dataElement,
  });
};
