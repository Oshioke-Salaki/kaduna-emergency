import Danger from "../components/Danger";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="mb-6 flex gap-x-[53px] bg-white px-8 py-[70px]">
        <SideControl />
        <div className="w-full">
          <Map />
        </div>
      </main>
      <div className="px-8">
        <Danger />
      </div>
    </div>
  );
}

export default Home;
