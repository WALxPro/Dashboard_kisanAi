const Bone = ({ className = "" }) => (
  <div className={`animate-pulse rounded-xl bg-muted/60 ${className}`} />
);

const CardSkeleton = () => (
  <div className="rounded-2xl border border-border bg-card overflow-hidden">
    <Bone className="h-44 w-full rounded-none" />
    <div className="p-5 space-y-3">
      <Bone className="h-5 w-3/4" />
      <Bone className="h-4 w-full" />
      <Bone className="h-4 w-2/3" />
      <div className="flex gap-3 pt-1">
        <Bone className="h-7 w-20 rounded-lg" />
        <Bone className="h-7 w-20 rounded-lg" />
      </div>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <Bone className="h-3 w-24" />
        <div className="flex gap-1">
          <Bone className="h-8 w-8 rounded-lg" />
          <Bone className="h-8 w-8 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

const TableRowSkeleton = () => (
  <tr className="border-b border-border/50">
    {[...Array(6)].map((_, i) => (
      <td key={i} className="px-5 py-3.5">
        <Bone className={`h-4 ${i === 0 ? "w-40" : i === 5 ? "w-20" : "w-24"}`} />
      </td>
    ))}
  </tr>
);

const ContentLoader = ({ variant = "cards", count = 6, columns = 6 }) => {
  if (variant === "cards") {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(count)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              {[...Array(columns)].map((_, i) => (
                <th key={i} className="px-5 py-3.5 text-left">
                  <Bone className="h-3 w-16" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(count)].map((_, i) => (
              <TableRowSkeleton key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentLoader;