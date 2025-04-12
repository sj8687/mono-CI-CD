
export default async function Home() {
  const res = await fetch("http://localhost:8080/user");
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  
  const data = await res.json();

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

// export const dynamic = `force-dynamic`