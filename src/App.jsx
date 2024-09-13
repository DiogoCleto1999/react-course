import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  /*
  useEffect(() => {
    const fetchTasks = async () => {
      //vai buscar os dados à api
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "Get",
        }
      );
      //guarda os dados numa variável em json
      const data = await response.json();
      //coloca essas tarefas no state tasks
      setTasks(data);
    };
    //chama a função para ir buscar as tarefas à api
    fetchTasks();
  }, []);*/

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDeleted(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTask(title, description) {
    /*
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1, // ou outra lógica para gerar um id único
        title: title,
        description: description,
        isCompleted: false,
      },
    ]);*/

    // Verifica se já existe uma tarefa com o mesmo título
    const taskExists = tasks.some((task) => task.title === title);

    if (taskExists) {
      // Se uma tarefa com o mesmo título já existe, não adicione a nova tarefa
      return false;
    }

    // Cria a nova tarefa
    const newTask = {
      id: tasks.length + 1, // ou outra lógica para gerar um id único
      title: title,
      description: description,
      isCompleted: false,
    };

    // Atualiza o estado com o novo array
    setTasks([...tasks, newTask]);

    return true;
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDeleted={onTaskDeleted}
        />
      </div>
    </div>
  );
}

export default App;
