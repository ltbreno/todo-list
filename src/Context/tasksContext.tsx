import { createContext } from "react";

export const TasksContext = createContext({})

interface TasksProviderProps {
    children: React.ReactNode
}

export const TasksProvider: React.FC<TasksProviderProps> = ({children}) => {

    return (
        <TasksContext.Provider value={"Compartilhado"}>
            {children}
        </TasksContext.Provider>
    )
}