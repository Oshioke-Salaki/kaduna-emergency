import { riverLevels } from "../data/data";

function RiverLevelBox() {
  return (
    <div className="w-full">
      <div className="border-b-solid w-full border-b-[0.5px] border-b-[#c4c4c4] pb-[9px]">
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
      <div className="flex">
        <h4 className="pb-[10px] pl-[10px] pr-[13px] pt-1">4.78</h4>
        <div className="h-full w-[0.5px] bg-[#c4c4c4]"></div>
        <h4 className="pb-[10px] pl-[10px] pr-[13px] pt-1">4.78</h4>
        <div className="h-full w-[0.5px] bg-[#c4c4c4]"></div>
        <h4 className="pb-[10px] pl-[10px] pr-[13px] pt-1">4.78</h4>
        <div className="h-full w-[0.5px] bg-[#c4c4c4]"></div>
        <h4 className="pb-[10px] pl-[10px] pr-[13px] pt-1">4.78</h4>
        <div className="h-full w-[0.5px] bg-[#c4c4c4]"></div>
        <h4 className="pb-[10px] pl-[10px] pr-[13px] pt-1">4.78</h4>
      </div>
    </div>
  );
}

export default RiverLevelBox;
