// Table.jsx
import React from "react";

export const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="w-full">{children}</table>
  </div>
);

export const TableHead = ({ children }) => (
  <thead>
    <tr className="border-b border-border">{children}</tr>
  </thead>
);

export const TableBody = ({ children }) => <tbody>{children}</tbody>;

export const TableRow = ({ children, hover = true }) => (
  <tr className={`border-b border-border/50 last:border-0 ${hover ? "hover:bg-secondary/40 transition-colors" : ""}`}>
    {children}
  </tr>
);

export const TableHeaderCell = ({ children }) => (
  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
    {children}
  </th>
);

export const TableCell = ({ children, className = "" }) => (
  <td className={`px-5 py-3.5 text-sm ${className}`}>{children}</td>
);