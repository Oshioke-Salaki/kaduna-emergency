import WaterLevel from "./WaterLevel";

function SideControl() {
  return (
    <div className="rounded-[10px] bg-greyLight pb-[14px]">
      <h2 className="rounded-[10px_10px_0_0] bg-primaryColor py-[23px] text-center text-white">
        Reports
      </h2>
      <div className="bg-[#F9F6F6] px-6 pt-5">
        <div className="mb-4 flex items-center gap-x-[10px]">
          <label
            htmlFor="cities"
            className="w-10 text-xs font-semibold text-black"
          >
            Cities:{" "}
          </label>
          <select
            name="cities"
            id="cities"
            className="w-full rounded-[30px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-4 py-[9px] text-xs font-semibold text-[#3a3a3a]"
          >
            <option value="kaduna">Kaduna</option>
            <option value="abuja">Abuja</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <label
            htmlFor="area"
            className="w-10 text-xs font-semibold text-black"
          >
            Area:{" "}
          </label>
          <select
            name="area"
            id="area"
            className="w-full rounded-[30px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-4 py-[9px] text-xs font-semibold text-[#3a3a3a]"
          >
            <option value="chikun">Chikun</option>
            <option value="kaduna-south">Kaduna South</option>
            <option value="kaduna-north">Kaduna North</option>
          </select>
        </div>
        <div className="mt-4 flex items-center gap-x-3">
          <h3 className="text-xs font-semibold text-black">Air Quality:</h3>
          <div className="flex w-[180px] items-center justify-center rounded-sm bg-[#2ABE11] py-[3px] text-center text-xs font-semibold text-white">
            Good
          </div>
        </div>
        <WaterLevel />
      </div>
    </div>
  );
}

export default SideControl;
