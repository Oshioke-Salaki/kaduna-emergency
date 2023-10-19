import bulb from "../assets/idea.png";
function Danger() {
  return (
    <div className="flex items-center bg-[#981806] px-[15px] py-[18px] text-white">
      <div className="mr-[10px] rounded-[0px_2.545px_2.545px_0px] border-[1.3px] border-solid border-[white] bg-[#D72020] text-[10px] font-semibold text-white">
        Danger
      </div>
      <h6 className="mr-[18px] text-sm font-extrabold text-white">9.14</h6>
      <img src={bulb} alt="" className="mr-[18px]" />
      <p className="text-base font-bold text-white">
        Flood Alert!!! The water level at Kaduna; Area- Kigo road, Badiko,
        Narayi, Occupants of buildings in these Areas should evacuate. *225*56*5
      </p>
    </div>
  );
}

export default Danger;
