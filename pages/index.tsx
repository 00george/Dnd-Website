import { UserButton } from "@clerk/nextjs";

function Home() {
  return (
    <div style={{ padding: 50 }}>
    Hi
    <div>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  </div>
  )
}

export default Home;
