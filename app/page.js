import Card from "@/components/Card";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/animal");
  const data = await res.json();
  console.log(data);
  return (
    <ul>
      {data.map((el) => (
        <Card key={el.id} animal={el} />
      ))}
    </ul>
  );
}
