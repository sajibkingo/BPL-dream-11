import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Players from "./Players/Players";
import type { Iplayer } from "./types/playerType";

const playersPromise = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  console.log(playersPromise);

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise()} />
      </Suspense>
    </>
  )
}

export default App
