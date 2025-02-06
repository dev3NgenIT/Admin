import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "United State", value: 60000, color: "#FFA500" },
  { name: "Canada", value: 10000, color: "#92BFFF" },
  { name: "Mexico", value: 10000, color: "#94E9B8" },
  { name: "Bangladesh", value: 20000, color: "#AEC7ED" },
];

export default function SalesDonutChart() {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <div className="col-span-4 p-4 bg-white shadow-sm rounded-2xl">
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Traffic By Location
      </h2>
      <div className="mt-10">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70} 
              outerRadius={120}
              paddingAngle={5}
              cornerRadius={10} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="px-4">
          <ul>
            {data.map((entry, index) => {
              const percentage = Math.round((entry.value / totalValue) * 100); // Round to nearest integer
              return (
                <li key={index} className="flex items-center justify-between pb-3">
                  <span>{entry.name}</span>
                  <span>{percentage}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
