import { useState } from "react";
import OverviewCard from "../../comps/OverviewCard/OverviewCard";
import SalesCharts from "./DashboardPages/Charts/SalesCharts";
import SalesDonutChart from "./DashboardPages/Charts/SalesDonutChart";
import RecentOrders from "./DashboardPages/DashboardComps/RecentOrders";
import LatestOrder from "./DashboardPages/DashboardComps/LatestOrder";
import SalesDetailsChart from "./DashboardPages/Charts/SalesDetailsChart";

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("October");
  const cardData = [
    {
      image: "/public/assets/card1.svg",
      title: "New Users",
      percentage: "+11.01%",
      count: "7,265",
      link: "/new-users",
    },
    {
      image: "/public/assets/card2.svg",
      title: "Daily Sales",
      percentage: "+11.01%",
      count: "7,265",
      link: "/daily-sales",
    },
    {
      image: "/public/assets/card3.svg",
      title: "Today Orders",
      percentage: "+11.01%",
      count: "7,265",
      link: "/today-orders",
    },
    {
      image: "/public/assets/card4.svg",
      title: "Today's Delivery",
      percentage: "+11.01%",
      count: "7,265",
      link: "/todays-delivery",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <OverviewCard
            key={index}
            image={card.image}
            title={card.title}
            percentage={card.percentage}
            count={card.count}
            link={card.link}
          />
        ))}
      </div>

      {/* Sales Charts */}
      <div className="grid grid-cols-12 gap-5 mt-5">
        <SalesCharts />
        <SalesDonutChart />
      </div>

      {/* Sales By Category (Recent Orders) */}
      <div className="p-6 mt-6 bg-white shadow-sm rounded-xl">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Sales By Category
        </h2>
        <RecentOrders />
      </div>

      {/* Sales Details Chart */}
      <div className="p-5 mt-5 bg-white shadow-sm rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Sales Details
            </h2>
            <select
              className="px-2 py-1 text-sm bg-white border border-gray-300 rounded-md shadow"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option>October</option>
              <option>September</option>
              <option>August</option>
            </select>
          </div>
          <SalesDetailsChart />
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5">
            <LatestOrder/>
        </div>
    </div>
  );
};

export default Dashboard;
