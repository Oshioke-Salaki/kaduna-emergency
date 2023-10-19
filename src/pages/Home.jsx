import Danger from "../components/Danger";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";

function Home() {
  return (
    <>
      <Navbar />
      <main className="mb-6 flex h-[512px] gap-x-[53px] bg-white px-8 py-[70px]">
        <SideControl />
        <div
          className="h-[512px] w-full"
          style={{ flex: "1", position: "relative" }}
        >
          <Map />
        </div>
      </main>
      <div className="px-8">
        <Danger />
      </div>
    </>
  );
}

export default Home;
