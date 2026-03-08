import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cityData = [
  { city: "Lahore", farmers: 520 },
  { city: "Faisalabad", farmers: 410 },
  { city: "Multan", farmers: 380 },
  { city: "Karachi", farmers: 340 },
  { city: "Islamabad", farmers: 290 },
  { city: "Peshawar", farmers: 250 },
  { city: "Quetta", farmers: 190 },
  { city: "Rawalpindi", farmers: 220 },
];
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-primary")
  .trim();
// const accentColor = getComputedStyle(document.documentElement)
//   .getPropertyValue("--color-accent")
//   .trim();
const borderColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-border")
  .trim();
const mutedForeground = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-muted-foreground")
  .trim();
const CityChart = () => {
  return (
    <div className="col-span-1 xl:col-span-2 rounded-2xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground">
            City-Wise Farmers
          </h2>
          <p className="text-sm text-muted-foreground">
            Distribution of farmers across major cities
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" /> Farmers
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={cityData} barGap={4}>
          <CartesianGrid
            stroke={borderColor}
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="city"
            tick={{ fill: mutedForeground, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: mutedForeground, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="farmers"
            name="Farmers"
            fill={primaryColor}
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CityChart;
