import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const [editingId, setEditingId] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editDescription, setEditDescription] =
  useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");

      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getTasks();
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id) => {
  try {
    await API.put(
      `/tasks/${id}`,
      {
        title: editTitle,
        description: editDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setEditingId(null);

    getTasks();
  } catch (error) {
    console.log(error);
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Task Manager Dashboard</h1>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <form
        className="task-form"
        onSubmit={createTask}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          required
        />

        <button
          className="add-btn"
          type="submit"
        >
          Add Task
        </button>
      </form>

      <div className="tasks-container">
        <h2>My Tasks</h2>

        {tasks.length === 0 ? (
         <div
  style={{
    textAlign: "center",
    marginTop: "20px",
    color: "#777",
    fontSize: "18px",
  }}
>
  No tasks available.
  <br />
  Create your first task above.
</div>
        ) : (
         tasks.map((task) => (
  <div
    key={task._id}
    className="task-card"
  >
    {editingId === task._id ? (
      <>
        <input
          type="text"
          value={editTitle}
          onChange={(e) =>
            setEditTitle(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="text"
          value={editDescription}
          onChange={(e) =>
            setEditDescription(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button
          className="add-btn"
          onClick={() =>
            updateTask(task._id)
          }
        >
          Save
        </button>
      </>
    ) : (
      <>
        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <p>
          Status: {task.status}
        </p>

        <button
          className="add-btn"
          onClick={() => {
            setEditingId(task._id);
            setEditTitle(task.title);
            setEditDescription(
              task.description
            );
          }}
        >
          Edit
        </button>

        {" "}

        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(task._id)
          }
        >
          Delete
        </button>
      </>
    )}
  </div>
))
        )}
      </div>
    </div>
  );
}

export default Dashboard;