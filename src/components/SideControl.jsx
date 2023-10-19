function SideControl() {
  return (
    <div className="bg-greyLight w-[303px] rounded-[10px_10px_0_0]">
      <h2 className="bg-primaryColor mb-5 rounded-[10px_10px_0_0] py-[23px] text-white">
        Reports
      </h2>
      <div className="mb-4 flex gap-x-[10px]">
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
      <div className="flex gap-x-[10px]">
        <label htmlFor="area" className="w-10 text-xs font-semibold text-black">
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
    </div>
  );
}

export default SideControl;
