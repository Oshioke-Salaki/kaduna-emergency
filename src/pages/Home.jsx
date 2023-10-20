import Danger from "../components/Danger";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import SideControl from "../components/SideControl";
import useFetch from "../hooks/useFetch";

function Home() {
  const {data} = useFetch(`https://api.thingspeak.com/channels/2313632/feeds.json?api_key=0PMLQ7B0B9BOGV52`)
  console.log(data)
  return (
    <>
      <Navbar />
      <main className="mb-6 flex h-fit w-full gap-x-[53px] bg-white px-8 py-[30px]">
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
