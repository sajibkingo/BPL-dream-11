import { use } from "react";
import type { Iplayer } from "../types/playerType";
import AvailablePlayers from "./AvailablePlayers";

type PlayersProps = {
    playersPromise: Promise<Iplayer[]>;
};

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise);
    console.log(players);

    return (
        <div className="container mx-auto">
            <div className="flex justify-between">
                <h2 className="font-bold text-xl">Available Players</h2>

                <div>
                    <button className="btn btn-success">Available</button>
                    <button className="btn">Selected</button>
                </div>
            </div>


            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;