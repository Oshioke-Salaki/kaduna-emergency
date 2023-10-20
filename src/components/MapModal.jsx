import {
  Bar,
  BarChart,
  // CartesianGrid,
  ResponsiveContainer,
  // Tooltip,
  // XAxis,
  // YAxis,
} from "recharts";
function MapModal() {
  return (
    <div className=" flex w-[264px] flex-col items-center rounded-[10px] border-[1px] border-solid border-[#c4c4c4] bg-white px-1 py-[9px]">
      <h1 className="border-b-solid w-full border-b-[0.5px] border-b-[#c4c4c4] pb-[9px] text-center text-base font-semibold text-black">
        Kaduna Metropolice
      </h1>
      <div className="mb-1 mt-[11px] flex w-[233px] items-center justify-center rounded-sm bg-[#2ABE11] py-[10px] text-center text-xs font-semibold text-white">
        Good
      </div>
      <p className="text-sm font-medium text-[#908484]">
        Uploaded an hour ago
        <br />
        (Oct 18 2023 8am)
      </p>
      <div className="mt-4 flex  w-full items-end  gap-x-3 justify-self-start">
        <h3 className="text-xs font-semibold text-black">P.M25</h3>
        <ResponsiveContainer width={100} height={44}>
          {/* <AreaChart data={data} width={700} height={300}> */}
          <BarChart
            barGap={1}
            data={[
              {
                name: "d",
                num: 12,
              },
              {
                name: "d",
                num: 14,
              },
              {
                name: "d",
                num: 15,
              },
              {
                name: "d",
                num: 17,
              },
              {
                name: "d",
                num: 18,
              },
              {
                name: "d",
                num: 23,
              },
              {
                name: "d",
                num: 24,
              },
              {
                name: "d",
                num: 8,
              },
              {
                name: "d",
                num: 11,
              },
              {
                name: "d",
                num: 9,
              },
              {
                name: "d",
                num: 13,
              },
              {
                name: "d",
                num: 2,
              },
              {
                name: "d",
                num: 18,
              },
              {
                name: "d",
                num: 9,
              },
              {
                name: "d",
                num: 13,
              },
              {
                name: "d",
                num: 2,
              },
              {
                name: "d",
                num: 4,
              },
              {
                name: "d",
                num: 6,
              },
            ]}
          >
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
              dataKey="num"
              // stroke='#000201'
              // fill='#dcfce7'
              stroke="#f6f6f6"
              fill="#624af5"
              barSize={15}
              // barGap={1}
              // strokeWidth={2}
              // unit="$"
              name="Num"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h3 className="border-t-solid mt-[14px] w-full border-t-[0.5px] border-t-[#c4c4c4] pt-1 text-center text-xs font-medium text-black">
        Click for more information
      </h3>
    </div>
  );
}

export default MapModal;
