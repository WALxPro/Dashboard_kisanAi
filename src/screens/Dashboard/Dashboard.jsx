import React, { useState, useEffect } from "react";
import {
  Users,
  Megaphone,
  FileText,
  DollarSign,
  Activity,
} from "lucide-react";

import {
  ActivityFeed,
  CityChart,
  CropDistributionChart,
  DashboardText,
  RecentFarmersTable,
  StatusCard,
} from "../../components";

const Dashboard = () => {
  // Backend se aayega
  const [stats, setStats] = useState([]);
  const [recentFarmers, setRecentFarmers] = useState([]);

  useEffect(() => {
    // Mock API fetch for stats
    const fetchStats = async () => {
      // Replace this with your real API call
      const data = [
        {
          title: "Total Farmers",
          value: "2,845",
          icon: Users,
          gradient: "from-primary to-accent",
        },
        {
          title: "Active ADS",
          value: "142",
          icon: Megaphone,
          gradient: "from-info to-blue-400",
        },
        {
          title: "Total Blogs",
          value: "86",
          icon: FileText,
          gradient: "from-warning to-amber-400",
        },
        {
          title: "Revenue",
          value: "$84,230",
          icon: DollarSign,
          gradient: "from-destructive to-rose-400",
        },
      ];
      setStats(data);
    };

    // Mock API fetch for recent farmers
    const fetchRecentFarmers = async () => {
      // Replace this with your real API call
      const data = [
        { avatar: "AK", name: "Ahmad Khan", email: "ahmad@email.com", city: "Lahore", status: "Active", joined: "Jan 15, 2024" },
        { avatar: "SA", name: "Sara Ali", email: "sara@email.com", city: "Faisalabad", status: "Active", joined: "Feb 20, 2024" },
        { avatar: "BA", name: "Bilal Ahmed", email: "bilal@email.com", city: "Multan", status: "Blocked", joined: "Mar 10, 2024" },
        { avatar: "FN", name: "Fatima Noor", email: "fatima@email.com", city: "Karachi", status: "Active", joined: "Apr 5, 2024" },
      ];
      setRecentFarmers(data);
    };

    fetchStats();
    fetchRecentFarmers();
  }, []);

  return (
    <div className="space-y-7">
      <DashboardText
        text="Dashboard"
        para="Welcome back! Here's your farm operations overview."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 ">
        {stats.map((stat, index) => (
          <StatusCard
            key={stat.title}
            index={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            gradient={stat.gradient}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <CityChart />
        <CropDistributionChart />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="col-span-1 xl:col-span-2 rounded-2xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-5">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Recent Farmers
              </h2>
              <p className="text-sm text-muted-foreground">
                Latest registrations from mobile app
              </p>
            </div>
            <Activity className="h-5 w-5 text-muted-foreground" />
          </div>

          <RecentFarmersTable data={recentFarmers}/>
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;

