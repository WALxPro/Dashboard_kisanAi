import React from "react";

const StatusCard = ({ title, gradient, value, icon }) => {
  const IconComponent = icon; // <- Capitalize for JSX usage

  return (
    <div
      key={title}
      className="cursor-pointer z-2 group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
    >
      <div
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-[0.07] transition-transform group-hover:scale-150"
        style={{
          background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        }}
      />
      <div className="flex items-center justify-between mb-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`}
        >
          <IconComponent className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{title}</p>
    </div>
  );
};

export default StatusCard;
