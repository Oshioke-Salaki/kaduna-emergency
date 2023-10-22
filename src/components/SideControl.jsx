// import { useEffect } from "react";
import { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
import WaterLevel from "./WaterLevel";
import {
  Bar,
  BarChart,
  // CartesianGrid,
  ResponsiveContainer,
  // Tooltip,
  // XAxis,
  // YAxis,
} from "recharts";
import Indicator from "./Indicator";

function SideControl() {
  const [dataFeeds, setDataFeeds] = useState([]);
  useEffect(() => {
    async function fetchFeeds() {
      const res = await fetch(
        `https://api.thingspeak.com/channels/2313632/feeds.json?api_key=0PMLQ7B0B9BOGV52`,
      );
      const data = await res.json();
      // return data;
      // console.log(res);

      setDataFeeds(data.feeds.filter((x) => x.field1 !== 0));
    }

    const id = setInterval(() => {
      fetchFeeds();
      // console.log("h");
    }, 1000);

    return () => {
      clearInterval(id);
    };

    // fetchFeeds();
  }, []);

  // console.log(dataFeeds);
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
          {
            dataFeeds.length > 0 && dataFeeds[dataFeeds.length - 1].field1 == 1070 && <Indicator color={'bg-green-500'} text={'Good'}/> ||
            dataFeeds.length > 0 && dataFeeds[dataFeeds.length - 1].field1 > 170 && <Indicator color={'bg-red-200'} text={'Moderate'}/> ||
            dataFeeds.length > 0 && dataFeeds[dataFeeds.length - 1].field1 >= 1070 && <Indicator color={'bg-red-400'} text={'Unhealthy'}/> ||
            dataFeeds.length > 0 && dataFeeds[dataFeeds.length - 1].field1 < 1070 && <Indicator color={'bg-red-700'} text={'Harzardous'}/>
          }
        </div>
        <div className="mt-4 flex items-end gap-x-3">
          <h3 className="text-xs font-semibold text-black">P.M:</h3>
          <ResponsiveContainer  height={44}>
            {/* <AreaChart data={data} width={700} height={300}> */}
            <BarChart barGap={1} data={dataFeeds}>
              {/* <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          /> */}
              {/* <CartesianGrid strokeDasharray="4" /> */}
              {/* <Tooltip contentStyle={{ backgroundColor: "white" }} /> */}
              {/* <Bar
            type="monotone"
            dataKey="totalSales"
            // stroke='#4f46e5'
            // fill='#c7d2fe'
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            unit="$"
            name="Total sales"
          /> */}
              <Bar
                // type="monotone"
                dataKey="field1"
                // stroke='#000201'
                // fill='#dcfce7'
                stroke="#f6f6f6"
                fill="#624af5"
                barSize={15}
                // barGap={1}
                // strokeWidth={2}
                // unit="$"
                name="field1"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <WaterLevel />
      </div>
    </div>
  );
}

export default SideControl;
