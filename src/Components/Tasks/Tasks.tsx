import { FormEvent, useContext, useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { TasksContext } from "../../Context/tasksContext";

interface Task {
    title: String ;
    done: Boolean ;
    id: number ;
}

export const Tasks: React.FC = () => {
    const [ taskTitle , setTaskTitle ] = useState("") ;

    const [ tasks , setTasks ] = useState( [] as Task [] ) ;

    const variavel = useContext(TasksContext)
    console.log(variavel)

    //função disparada quando o usuario quer submeter a atividade
    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault()
        //Não Adiciona nada
        if (taskTitle.length <= 3 ) {
            alert("Não é possivel adicionar uma atividade com menos de 3 digitos")
            return
        }

        //Adicionar Atividade
        const newTasks = [
            ...tasks, //Pega todas as atividades que já existiam e coloca nesse novo valor do estado de tarefas
            { id: new Date().getTime() , title: taskTitle , done: false}
        ]
        setTasks(newTasks);

        localStorage.setItem("tasks" , JSON.stringify(newTasks) )

        setTaskTitle("");
    }

    useEffect(() => {
        const tasksOnLocalStorage = localStorage.getItem("tasks")

        if (tasksOnLocalStorage) {
         setTasks(JSON.parse(tasksOnLocalStorage));
        }
    }, [])

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="task-title">Adicionar Atividade</label>
                    <input value={taskTitle}
                    onChange={ (event) => setTaskTitle(event.target.value) }
                    type="text"
                    id="task-title"
                    placeholder="Título da tarefa" />
                </div>

                <button type="submit">Adicionar Tarefa</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor="task">{task.title}</label>
                         </li>
                    )
                })}
            </ul>
        </section>
    )
}