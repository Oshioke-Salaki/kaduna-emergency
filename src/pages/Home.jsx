import Danger from "../components/Danger";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";
// import useFetch from "../hooks/useFetch";

function Home() {

  return (
    <>
      <Navbar />
      <main className="mb-6 flex h-fit w-full gap-x-[53px] bg-white px-8 py-[30px]">
        <SideControl />

        <Map />
      </main>
      <div className="px-8">
        <Danger />
        {/* {data && <h4>{ JSON.parse(data.feeds?.[data.feeds.length -1].field1 )}</h4>} */}
      </div>
    </>
  );
}

export default Home;
