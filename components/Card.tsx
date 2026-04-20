// components/Card.tsx
export default function Card({ title, value }: any) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3>{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}