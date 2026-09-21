export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatMetricQuantity(amount: number, unit: string = "MT"): string {
  return `${amount.toLocaleString("en-US")} ${unit}`;
}
