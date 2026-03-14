 
import { useTaskContext } from "../../hooks/useTaskContext";

export function Home() {

    const {addTask, task, desc, setTask, setDesc, handleTaskEnter, descRef} = useTaskContext();    
    
    return (
        <div>
            <main className="min-h-screen bg-slate-50 flex flex-col items-center px-6">
                <h1 className="font-bold text-2xl mb-8 mt-12 text-center text-slate-900">
                    FocusFlow - Organize suas Tarefas !
                </h1>
                <div className="w-full max-w-md">
                    <form onSubmit={addTask} className="bg-white p-6 rounded-xl shadow-lg  space-y-4">
                        <div>
                            <label className="font-medium text-slate-700">
                                Adicione a Tarefa
                            </label>
                            <input onKeyDown={handleTaskEnter} value={task} onChange={e => setTask(e.target.value)} onKeyDownCapture={handleTaskEnter}
                                type="text"
                                className="w-full border border-slate-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 outline-none"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-slate-700">
                                Descrição da Task
                            </label>
                            <textarea ref={descRef} value={desc} onChange={e => setDesc(e.target.value)} rows={4} cols={50}
                                className="w-full border border-slate-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 outline-none"
                            />
                        </div>

                        <button className="w-full bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
                            Salvar Tarefa
                        </button>
                    </form>

                </div>
 
            </main>
        </div>
    )
}
