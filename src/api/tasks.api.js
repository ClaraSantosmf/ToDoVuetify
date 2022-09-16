import api from "@/api";

export default {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      api.get("http://localhost:3000/tasks").then((response) => {
        resolve(response.data);
      });
    });
  },
  petTasks: (task) => {
    axios.put(`http://localhost:3000/tasks/${task.id}`, task);
  },
  postTasks: (task) => {
    axios.post("http://localhost:3000/tasks/", task);
  },
  deleteTasks: (task) => {
    axios.delete(`http://localhost:3000/tasks/${task.id}`);
  },
};
