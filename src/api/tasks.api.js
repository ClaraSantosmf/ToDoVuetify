import api from "@/api";
import axios from "axios";

//axios.defaults.baseURL = 'http://localhost:3000'

export default {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      api.get("api/tasks/").then((response) => {
        resolve(response.data);
      });
    });
  },
  petTasks: (task) => {
    axios.put(`/tasks/${task.id}`, task);
  },
  postTasks: (task) => {
    axios.post("/tasks/", task);
  },
  deleteTasks: (task) => {
    axios.delete(`/tasks/${task.id}`);
  },
};
