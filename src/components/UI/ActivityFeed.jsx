import React from 'react'
import {
  Megaphone,
  FileText,
  Sprout,
} from "lucide-react";
const recentActivity = [
  {
    action: "New farmer registered",
    detail: "Ahmad Khan joined from Lahore",
    time: "2h ago",
    icon: Sprout,
    color: "bg-primary/10 text-primary",
  },
  {
    action: "Ad campaign launched",
    detail: "Fertilizer Premium Ad is live",
    time: "4h ago",
    icon: Megaphone,
    color: "bg-info/10 text-info",
  },
  {
    action: "Blog published",
    detail: "Wheat Farming Tips article",
    time: "6h ago",
    icon: FileText,
    color: "bg-warning/10 text-warning",
  },
];
const ActivityFeed = () => {
  return (
    <div className="rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-5">
            <h2 className="text-lg font-bold text-foreground">Activity Feed</h2>
            <p className="text-sm text-muted-foreground">
              Latest platform activities
            </p>
          </div>
          <div className="p-2">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl p-3 hover:bg-secondary/40 transition-colors"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
                >
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activity.detail}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground/60">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default ActivityFeed