import { SearchX } from "lucide-react";

const EmptyState = ({
  title = "No data found",
  description = "There's nothing here yet.",
}) => {
  const Icon = SearchX;

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/50 mb-1">
        <Icon className="h-15 w-15 text-muted-foreground/40" />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-1.5">{title}</h3>
      <p className="text-lg text-muted-foreground text-center max-w-sm mb-6">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
