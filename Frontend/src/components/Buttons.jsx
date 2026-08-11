function Buttons({ variant = "primary", text, onClick, href }) {
  const styles = {
    green: "w-fit rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300",
    secondary: "w-fit rounded-full border border-slate-600 bg-slate-950 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-slate-400",
  }

  if (href) {
    return (
      <a href={href} className={`${styles[variant]}`}>
        {text}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${styles[variant]}`}>
      {text}
    </button>
  )
}

export default Buttons;