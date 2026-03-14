import { createContext, type ReactNode } from "react";
import type { TaskContextData } from "../types/context";
import { useTasks } from "../hooks/useTasks";

export const TaskContext = createContext({} as TaskContextData)

export function TaskProvider({children}: {children : ReactNode}) {

    const {
        tasks, task, desc, descRef, orderedTasks, filteredTasks, filter, setFilter, setTask, setDesc, addTask, deleteTask,conclusionTask, handleTaskEnter, 
     } = useTasks();

    return (
            <TaskContext.Provider value={{ tasks, task, desc , descRef, orderedTasks,  setTask, setDesc, addTask , deleteTask, conclusionTask, handleTaskEnter, filteredTasks, filter, setFilter}}
            >
            {children}
            </TaskContext.Provider>
    )
};