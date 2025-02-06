import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const salesData = [
  { name: "5k", sales: 25 },
  { name: "10k", sales: 40 },
  { name: "15k", sales: 45 },
  { name: "20k", sales: 64.36 },
  { name: "25k", sales: 50 },
  { name: "30k", sales: 55 },
  { name: "35k", sales: 30 },
  { name: "40k", sales: 48 },
  { name: "45k", sales: 70 },
  { name: "50k", sales: 65 },
  { name: "55k", sales: 55 },
  { name: "60k", sales: 58 },
];

const SalesDetailsChart = () => {

  return (
    <div className="p-6 mt-5 shadow-sm rounded-2xl bg-gradient-to-b from-blue-100 to-white">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={salesData}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} />
          <YAxis tickFormatter={(tick) => `${tick}%`} />
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <Tooltip />

          <Area type="monotone" dataKey="sales" stroke="#2563eb" fill="url(#colorSales)" />
          <Line type="monotone" dataKey="sales" stroke="#2563eb" dot={{ fill: "#2563eb", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDetailsChart;
