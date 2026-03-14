import { RiDeleteBin2Fill } from "react-icons/ri";
import type { Task } from "../../types/task";
 
interface TaskCardProps {
  task: Task;
  onDelete: (id : string) => void;
  onToggle: (id: string, task: Task) => void;
}

export function TaskCard({ task, onDelete, onToggle }: TaskCardProps) {
  return (
    <div className="mb-2 flex flex-col gap-2 rounded-md border px-3 py-2 shadow-sm">
      
      <div
        className={`rounded p-2 ${
          task.completed
            ? "bg-emerald-50 border border-emerald-300"
            : "bg-white border border-slate-200"
        }`}
      >
        <span
          className={
            task.completed
              ? "line-through text-slate-500"
              : "text-slate-800 font-semibold"
          }
        >
          {task.title}
        </span>
      </div>

      <p className="break-all whitespace-pre-wrap text-slate-600">
        {task.desc}
      </p>

      <div className="flex items-center justify-end gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id, task)}
        />

        <button onClick={() => onDelete(task.id)}>
          <RiDeleteBin2Fill size={20} />
        </button>
      </div>

      <p className="text-sm text-slate-500">
        Criada em: {new Date(task.createdAt).toLocaleString("pt-BR")}
      </p>
    </div>
  );
}