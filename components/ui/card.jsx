export function Card({ children }) {
  return <div className="rounded-xl border p-4 bg-white">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}