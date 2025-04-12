

export default async function Home() {
  const res = await fetch("http://localhost:8080/user");
  const users = await res.json();

  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const dynamic = `force-dynamic`