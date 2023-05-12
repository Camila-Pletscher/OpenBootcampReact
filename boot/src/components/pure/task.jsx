import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Create task");

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
        case LEVELS.BLOCKING:
        
        return(<h6 className="mb-0"><span className="badge bg-danger">{task.level}</span></h6>)
      default:
        break;
    }
  }

  function taskCompletedIcon(){
    if(task.completed) {
      return(<i className="bi-toggle-on" style={{ color: "green" }}></i>)
    } else {
      return (<i className="bi-toggle-off" style={{ color: "grey" }}></i>)
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>

      <td className="align-middle">
        <span className="ms-2">{task.description}</span>
      </td>

      <td className="align-middle">
        {/* Sustituir por un badge */}
        {taskLevelBadge()}
      </td>

      <td className="align-middle">
        {/* Sustituir por icono */}
        {taskCompletedIcon()}
        <i className="bi-trash" style={{ color: "tomato" }}></i>

        {/* <span className="ms-2">{task.completed ? 'Completed' : 'Pending'}</span> */}
      </td>
    </tr>

    // <div>
    //   <h2 className="task-name">Nombre: {task.name}</h2>
    //   <h3>Descripción: {task.description}</h3>
    //   <h4>Level: {task.level}</h4>
    //   <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    // </div>
  );
};

TaskComponent.propTypes = {
  //Aca nos aseguramos que reciba por pops un dato de tipo task, con el metodo instanceof lo podemos validar. Task es la clase.
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
