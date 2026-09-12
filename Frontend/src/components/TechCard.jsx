const TechCard = (props) => {
    return (
        <div className="bg-[#1e293b] border border-slate-700 rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-1">{props.header}</p>
            <p className="text-slate-500 text-xs">{props.text}</p>
        </div>
    )
}

export default TechCard();