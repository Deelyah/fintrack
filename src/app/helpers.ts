export const getBadgeVariant = (
  type: "Credit" | "Debit"
): "positive" | "critical" => {
  if (type == "Credit") {
    return "positive";
  }
  return "critical";
};
