export const extractIntent = (text: string) => {
  const q = text.toLowerCase();
  let intent: "products" | "deals" | "payments" | "orders" | "support" | "unknown" =
    "unknown";

  if (q.includes("deal") || q.includes("offer") || q.includes("discount")) {
    intent = "deals";
  }
  else if (
    q.includes("thank") ||
    q.includes("thanks") ||
    q.includes("thx") ||
    q.includes("welcome")
  ) {
    intent = "support";
  } else if (
    q.includes("order") ||
    q.includes("orders") ||
    q.includes("track") ||
    q.includes("tracking") ||
    q.includes("delivery") ||
    q.includes("status") ||
    q.includes("where is my")
  ) {
    intent = "orders";
  } else if (
    q.includes("payment") ||
    q.includes("pending") ||
    q.includes("amount") ||
    q.includes("pay")
  ) {
    intent = "payments";
  } else {
    intent = "products";
  }

  return intent;
};
