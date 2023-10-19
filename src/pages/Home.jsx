import Danger from "../components/Danger";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";

function Home() {
  return (
    <>
      <Navbar />
      <main className="mb-6 flex h-fit gap-x-[53px] bg-white px-8 py-[70px]">
        <SideControl />

        <Map />
      </main>
      <div className="px-8">
        <Danger />
      </div>
    </>
  );
}

export default Home;
