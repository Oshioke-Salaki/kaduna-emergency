import { riverLevels } from "../data/data";
import value from '../assets/value.png'

function RiverLevelBox() {
  return (
    <div className="w-full">
      <div className="border-b-solid w-full border-b-[0.5px] border-b-[#c4c4c4] pb-[9px]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
          {riverLevels.map((level, i) => (
            <div
              key={i}
              className={`bg-[${level.color}] flex items-center justify-center px-[13px] py-[7px] text-center text-[8px] font-semibold text-white`}
              style={{ backgroundColor: level.color }}
            >
              {level.level}
            </div>
          ))}
        </div>
      </div>
      <img src={value} className="w-full" alt="" />
    </div>
  );
}

export default RiverLevelBox;
