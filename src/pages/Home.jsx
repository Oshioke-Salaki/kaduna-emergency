import Danger from "../components/Danger";
import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="mb-6 flex gap-x-[53px] bg-white px-8 py-[70px]">
        <SideControl />
      </main>
      <Danger />
    </div>
  );
}

export default Home;
