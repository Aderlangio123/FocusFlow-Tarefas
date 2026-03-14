import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-full border-b  bg-green-800 px-4 shadow-md">
            <nav className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 py-3 md:flex-row md:items-center">
                <Link
                    className="rounded-xl bg-white/95 px-3 py-2 shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-800"
                    to="/"
                >
                    <img src="/logo focusflow (2) (2).png" className="h-10 w-auto sm:h-16" alt="Logo FocusFlow" />
                </Link>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <Link
                        className="rounded-lg px-4 py-2 text-base font-semibold text-emerald-50 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/80 sm:text-lg"
                        to="/"
                    >
                        Cadastrar Tarefas
                    </Link>
                    <Link
                        className="rounded-lg px-4 py-2 text-base font-semibold text-emerald-50 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/80 sm:text-lg"
                        to="/listTask"
                    >
                        Minhas Tarefas
                    </Link>
                </div>
            </nav>
        </header>
    )
}
