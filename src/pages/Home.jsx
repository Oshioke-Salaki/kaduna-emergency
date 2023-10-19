import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex gap-x-[53px] bg-white px-8 py-[70px]">
        <SideControl />
      </main>
    </div>
  );
}

export default Home;
