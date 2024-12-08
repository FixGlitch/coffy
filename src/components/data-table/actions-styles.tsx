//labels colors

export const getBadgeStyles = (label: string) => {
  switch (label) {
    case "promotion":
      return "border-success-primary text-success-primary bg-success-tertiary";
    case "discount":
      return "border-info-primary text-info-primary bg-info-tertiary";
    case "refund":
      return "border-danger-primary text-danger-primary bg-danger-tertiary";
    case "bug":
      return "border-red-500 text-red-500 bg-red-100";
    case "feature":
      return "border-blue-500 text-blue-500 bg-blue-100";
    case "enhancement":
      return "border-yellow-500 text-yellow-500 bg-yellow-100";
    case "documentation":
      return "border-success-primary text-success-primary bg-success-tertiary";
    default:
      return "border-info-primary text-info-primary bg-info-tertiary";
  }
};

//status colors

export const getStatusIconColor = (status: string) => {
  const statusColors = {
    pending: "text-warning-primary",
    completed: "text-success-primary",
    canceled: "text-danger-primary",
    todo: "text-warning-primary",
    "in-progress": "text-info-primary",
    done: "text-success-primary",
  };

  return (
    statusColors[status as keyof typeof statusColors] || "text-info-primary"
  );
};

//priority colors
export const getPriorityIconColor = (priority: string) => {
  const priorityColors = {
    low: "text-info-primary",
    medium: "text-warning-primary",
    high: "text-danger-primary",
  };

  return (
    priorityColors[priority as keyof typeof priorityColors] ||
    "text-info-primary"
  );
};

//archived colors
export const getArchivedIconColor = (archived: boolean) => {
  return archived
    ? "border border-success-primary text-success-primary"
    : "border border-danger-primary text-danger-primary";
};
