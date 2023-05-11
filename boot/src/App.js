import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplos4 from './hooks/Ejemplos4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './hooks/lifecycle/clock';

import Prueba from './hooks/lifecycle/prueba';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <TaskListComponent/>
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplos4 nombre="Cami">
          <h3>
            Este contenido es del children
          </h3>
        </Ejemplos4> */}
        {/* <GreetingStyled name={'Cami'}/> */}
        {/* <ActSesions></ActSesions> */}
        {/* <Prueba/> */}
        {/* <Clock/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
