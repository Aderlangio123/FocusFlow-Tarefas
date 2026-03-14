import type { Task } from "./task";

export interface TaskContextData {
    tasks: Task[],
    task: string,
    desc: string,
    filteredTasks: Task[];
    filter: "all" | "completed" | "pending";
    setFilter: React.Dispatch<React.SetStateAction<"all" | "completed" | "pending">
  >;

    setTask: (vlaue : string) => void;
    setDesc: (value : string) => void;
    deleteTask: (task : Task) => void;
    addTask : (e : React.FormEvent<HTMLFormElement>) => void;
    conclusionTask: (id : string) => void;
    orderedTasks: Task[];
    handleTaskEnter: (e : any) => void;
    descRef: React.RefObject<HTMLTextAreaElement | null>;
    
}