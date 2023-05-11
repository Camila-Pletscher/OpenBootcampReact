import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
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
                {/* Iterar sobre una lista de tareas para mostrar varias filas */}
                <TaskComponent task={defaultTask} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TaskListComponent;
