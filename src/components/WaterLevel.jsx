function WaterLevel() {
  return (
    <div className="border-t-solid mt-5 border-t-[0.5px] border-t-[#c4c4c4] pt-5">
      <h2 className="mb-4 text-base font-semibold text-black">Water Level</h2>
      <div className="mb-4 flex items-center gap-x-[10px]">
        <label
          htmlFor="water_area"
          className="w-10 text-xs font-semibold text-black"
        >
          Area:{" "}
        </label>
        <select
          name="water_area"
          id="water_area"
          className="w-[213px] rounded-[30px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-4 py-[9px] text-xs font-semibold text-[#3a3a3a]"
        >
          <option value="kaduna">Kaduna</option>
          <option value="abuja">Abuja</option>
          <option value="lagos">Lagos</option>
        </select>
      </div>
      <div className="flex items-center gap-x-[10px]">
        <label
          htmlFor="river"
          className="w-10 text-xs font-semibold text-black"
        >
          River:{" "}
        </label>
        <select
          name="river"
          id="river"
          className="w-[213px] rounded-[30px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-4 py-[9px] text-xs font-semibold text-[#3a3a3a]"
        >
          <option value="chikun">Chikun</option>
          <option value="kaduna-south">Kaduna South</option>
          <option value="kaduna-north">Kaduna North</option>
        </select>
      </div>
    </div>
  );
}

export default WaterLevel;
