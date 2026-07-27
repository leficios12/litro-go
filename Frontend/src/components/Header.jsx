export default Header;
function Header() {
    return(
        /* Banner */
        <div className="bg-gradient-to-r from-green-500 to-stone-700 h-40 flex flex-col items-center place-content-center">
            <p className="text-4xl p-2 font-bold">Calculate your trip fuel cost</p>
            <p className="text-base p-2">Enter your route, vehicle details, and split the cost with your friends.</p>
        </div>
    )
}