import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Players from "./Players/Players";
import type { Iplayer } from "./types/playerType";


const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  //console.log(playersPromise);
  //const playersPromise = playersFetch();
  const [playersPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Nav coin={coin}/>
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
      </Suspense>
    </>
  )
}

export default App
