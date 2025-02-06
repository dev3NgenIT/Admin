import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Shoes", value: 14000, color: "#9F9FF8" },
  { name: "T-shirts", value: 29000, color: "#96E2D6" },
  { name: "Watches", value: 21000, color: "#000000" },
  { name: "Airpods", value: 32000, color: "#92BFFF" },
  { name: "Books", value: 12000, color: "#AEC7ED" },
  { name: "Gadgets", value: 22000, color: "#94E9B8" },
];

export default function SalesCharts() {
  return (
    <div className="col-span-8 p-4 bg-white shadow-sm rounded-2xl">
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Sales By Category
      </h2>
      <div className="mt-20">
        <ResponsiveContainer width="100%" height={350} className="bg-white">
          <BarChart
            data={data}
            barSize={28}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: "#00000066" }}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(value) => `${Math.abs(value) / 1000}K`}
              tick={{ fill: "#00000066" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 8, 8]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
