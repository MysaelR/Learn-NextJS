import { useEffect, useState } from 'react';
import Nome from './components/Nome';


function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
      // 'pagar a conta de luz',
      // 'estudar reactJS'
  ]);

  // useEffect(()=> {
  //   const tarefasStorage = localStorage.getItem('@tarefas');
  //   console.log('tarefas do localStorage 1: ',tarefasStorage)
  //   if(tarefasStorage){
  //     setTarefas(JSON.parse(tarefasStorage));
  //   }
  // }, []);

  // useEffect(() => {
  //   // const tarefasStorage = localStorage.getItem("@tarefas");
  //   // if(tarefasStorage){
  //     localStorage.setItem('@tarefas', JSON.stringify(tarefas))
  //     const tarefasStorage = localStorage.getItem('@tarefas');
  //     console.log('tarefas do localStorage 2: ',tarefasStorage)
  //   // }
  // }, [tarefas]);

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);

  useEffect(()=>{ 
      localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);


  function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
    console.log(tarefas)
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa: </label><br/>
        <input 
          placeholder='Digite uma tarefa'
          value={input}
          onChange={ (e) => setInput(e.target.value)}  
        /><br/>


        <button type='submit'>Registrar</button>
      </form>
      <br/><br/>
      <div>
        <ul>
          {tarefas.map(tarefa =>(
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
     

    </div>
  );
}

export default App;

