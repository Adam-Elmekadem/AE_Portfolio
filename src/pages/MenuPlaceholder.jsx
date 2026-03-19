import { Link } from 'react-router-dom'

const MenuPlaceholder = ({ title }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f1014] px-6 text-[#ece6e9]">
      <section className="flex w-full max-w-xl flex-col items-center gap-5 rounded-xl border border-white/12 bg-white/4 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-white/55">Portfolio Section</p>
        <h1 className="bounded-font text-4xl uppercase tracking-[0.08em]">{title}</h1>
        <Link
          to="/"
          className="rounded-full border border-white/25 px-5 py-2 text-xs uppercase tracking-[0.14em] transition hover:bg-white/12"
        >
          Back to Summary
        </Link>
      </section>
    </main>
  )
}

export default MenuPlaceholder
