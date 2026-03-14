import { Link } from "react-router-dom";
import { TaskCard } from "../../components/TaskCard/taskcard";
import { useTaskContext } from "../../hooks/useTaskContext";
 

export function ListTaskView() {
    const {orderedTasks, deleteTask, conclusionTask, filteredTasks, setFilter} = useTaskContext();

    return (
      // logica pra conferir se tem task colocada
      <div className="mx-auto max-w-md p-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 bg-slate-200 rounded"
          >
            Todas
          </button>

          <button
            onClick={() => setFilter("pending")}
            className="px-3 py-1 bg-yellow-200 rounded"
          >
            Pendentes
          </button>

          <button
            onClick={() => setFilter("completed")}
            className="px-3 py-1 bg-green-200 rounded"
          >
            Concluídas
          </button>
        </div>
        {orderedTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="font-medium text-slate-700">
              Ops.. Lista de tarefas Vazia..
            </p>
            <Link
              className="my-3 rounded bg-green-800 px-3 py-2 text-white font-medium"
              to="/"
            >
              Cadastrar Tarefa
            </Link>
          </div>
        )}

        {[...filteredTasks].sort((a,b) => {
            if(a.completed === b.completed) {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
            return Number(a.completed) - Number(b.completed);
        }).map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task)}
            onToggle={conclusionTask}
          />
        ))}

      </div>
    );
}
