const StepsCard = (props) => {
  return (
    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 flex flex-col gap-4">
      
      <div className="w-9 h-9 bg-green-800 rounded-xl flex items-center justify-center">
        <span className="text-green-400 text-sm font-bold">{props.number}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg font-bold">{props.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{props.desc}</p>
      </div>

    </div>
  )
}
export default StepsCard;
