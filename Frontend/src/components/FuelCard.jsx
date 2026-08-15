const FuelCard = ({ type, price, previousPrice, change }) => {

  const isPositive = change > 0;

  return (
    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5 flex flex-col gap-3">
      
      <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">{type}</p>

      <div className="flex items-baseline gap-1">
        <span className="text-white text-3xl font-bold">{price.toFixed(2)}</span>
        <span className="text-slate-500 text-sm">₱ / liter</span>
      </div>

      <p className={`text-sm font-medium ${isPositive ? 'text-red-400' : 'text-emerald-400'}`}>
        {isPositive ? '↑' : '↓'} 
        {Math.abs(change).toFixed(2)}
         this week
      </p>

      <p className="text-slate-600 text-xs">Previous: ₱{previousPrice.toFixed(2)}</p>

    </div>
  )
};

export default FuelCard;