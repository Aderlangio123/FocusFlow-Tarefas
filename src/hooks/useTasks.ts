import { useEffect, useRef, useState } from "react";
import type { Task } from "../types/task";
import toast from "react-hot-toast";

const STORAGE_KEY = "@focusflow:tasks";

export function useTasks() {

    const [task, setTask] = useState("")  
    const [desc,setDesc] = useState(""); 
    const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
    const descRef = useRef<HTMLTextAreaElement>(null);  
        
    const [tasks, setTasks] = useState<Task[]>(() => { 
        const storageTasks = localStorage.getItem(STORAGE_KEY);
        if (!storageTasks)
            return []

            try {
                return JSON.parse(storageTasks) as Task[];
            } catch {
                return [];
            }
        });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY,  JSON.stringify(tasks));
    }, [tasks]);

    function addTask(e : React.FormEvent<HTMLFormElement>) {
 
        e.preventDefault();

        if(!task.trim() || !desc.trim()) {
            toast.error("Preencha todos os campos!");
            return;
        }

        const id = crypto.randomUUID();
        const createdAt = new Date().toISOString();

        setTasks((prev) => [...prev, {id, title: task, desc, createdAt, completed: false},]);

        setTask("")
        setDesc("")
        toast.success("Adicionado Com sucesso!");

    }

    function deleteTask(task : Task) { 

        toast.success("Removido com sucesso!!!")

        setTimeout(() => {
            setTasks(prev => prev.filter((item) => item.id !== task.id)); 
        }, 300);        
    }

    function handleTaskEnter(e : React.KeyboardEvent<HTMLInputElement>) {  
        if (e.key === "Enter") {
            e.preventDefault();
            descRef.current?.focus();
        }
    }

    function conclusionTask( id: string) { 
        setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed}
        : task    
        )
        );
    }

    const filteredTasks = tasks.filter(task => {
        if(filter === "completed") return task.completed;
        if(filter === "pending") return !task.completed;
        return true;
    })
    
    const orderedTasks = [...tasks].sort((a, b) => {
            if (a.completed === b.completed) {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
            return Number(a.completed) - Number(b.completed); // false (0) vem antes de true (1)
    });
    
    return {
    tasks,
    task,
    desc,
    descRef,
    filteredTasks,
    filter,
    setFilter,
    orderedTasks,
    setTask,
    setDesc,
    handleTaskEnter,
    addTask,
    deleteTask,
    conclusionTask,
    };
}