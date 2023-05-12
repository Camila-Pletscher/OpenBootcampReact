import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Description 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description 2",
    false,
    LEVELS.URGENT
  );

  const defaultTask3 = new Task(
    "Example3",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);

    return () => {
      console.log("Taslist componente is going to unmount");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("cambiar estado a una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your tasks:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return <TaskComponent key={index} task={task} />;
                })}
                {/* Iterar sobre una lista de tareas para mostrar varias filas */}
              </tbody>
            </table>
          </div>
          
        </div>
        <TaskForm/>
      </div>
    </div>
  );
};

export default TaskListComponent;
