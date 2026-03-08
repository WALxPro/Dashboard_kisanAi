import React from "react";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
const cropDistribution = [
  { name: "Wheat", value: 35, color: "hsl(160, 84%, 29%)" },
  { name: "Rice", value: 25, color: "hsl(168, 76%, 42%)" },
  { name: "Cotton", value: 18, color: "hsl(217, 91%, 60%)" },
  { name: "Sugarcane", value: 12, color: "hsl(38, 92%, 50%)" },
  { name: "Others", value: 10, color: "hsl(220, 14%, 70%)" },
];
const CropDistributionChart = () => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-lg font-bold text-foreground mb-1">
        Crop Distribution
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Percentage by crop type
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={cropDistribution}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            dataKey="value"
            stroke="none"
          >
            {cropDistribution.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${value}%`}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--card))",
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {cropDistribution.map((crop) => (
          <div key={crop.name} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ backgroundColor: crop.color }}
            />
            <span className="text-xs text-muted-foreground">{crop.name}</span>
            <span className="ml-auto text-xs font-semibold text-foreground">
              {crop.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropDistributionChart;
