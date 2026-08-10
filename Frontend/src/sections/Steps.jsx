import StepsCard from '../components/StepsCard.jsx'


function Steps() {
  return (
    <section className="px-12 py-20 bg-[#0a1020]">
      <div>
        <p className="text-green-500 text-xs font-semibold tracking-widest mb-3">HOW IT WORKS</p>
        <h2 className="text-white text-3xl font-bold mb-2">Plan your trip, split the cost</h2>
        <p className="text-slate-400 text-sm mb-10">Four steps, done in seconds.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <StepsCard number="1" 
        title="Enter your route" 
        desc="Type your starting point and destination. We calculate the actual road distance via Google Maps." 
        />
        <StepsCard number="2" 
        title="Set vehicle details" 
        desc="Choose your fuel type and enter how efficient your vehicle is in km/L." 
        />
        <StepsCard 
        number="3" 
        title="Add your group" 
        desc="Enter the number of passengers and we split the total cost per head automatically." 
        />
        <StepsCard number="4" 
        title="Get your breakdown" 
        desc="See total liters needed, total cost, and each person's share instantly." 
        />
      </div>
    </section>
  )
}

export default Steps;