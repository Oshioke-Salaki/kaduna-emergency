import { riverLevels } from "../data/data";

function RiverLevelBox() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
        {riverLevels.map((level, i) => (
          <div
            key={i}
            className={`bg-${level.color} flex items-center justify-center px-[13px] py-[7px] text-center text-[8px] font-semibold text-white`}
          >
            {level.level}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiverLevelBox;
