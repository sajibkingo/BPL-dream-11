import { FaUser } from "react-icons/fa6";
import { GiCricketBat, GiWhistle } from "react-icons/gi";
import type { Iplayer } from "../types/playerType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface PlayerCardProps {
    player: Iplayer,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: Iplayer[],
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}


const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayerCardProps) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelectPlayer = () => {
        const newCoinPrice = coin - player.price;

        if (newCoinPrice >= 0) {
            setCoin(newCoinPrice);
            setSelectedPlayers([...selectedPlayers, player]);
            setIsSelected(true);
            toast(`${player.playerName} is purchased successfully`)
        } else {
            toast("Coin is low");
        }

        // Selected players
        setSelectedPlayers([...selectedPlayers, player]);
    }



    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Player Image */}
            <figure className="relative h-64 overflow-hidden bg-base-200">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type Badge */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content shadow-lg">
                        {player.playerType}
                    </span>
                </div>
            </figure>

            {/* Card Content */}
            <div className="card-body p-5">

                {/* Player Name */}
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <FaUser />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">
                            {player.playerName}
                        </h2>

                        <p className="text-sm text-base-content/60">
                            {player.origin}
                        </p>
                    </div>
                </div>

                <div className="divider my-2"></div>

                {/* Playing Style */}
                <div className="space-y-3">

                    <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
                        Playing Style
                    </h3>

                    <div className="grid grid-cols-2 gap-3">

                        {/* Batting */}
                        <div className="rounded-xl bg-base-200 p-3">
                            <div className="mb-1 flex items-center gap-2 text-primary">
                                <GiCricketBat />
                                <span className="text-xs font-semibold">
                                    Batting
                                </span>
                            </div>

                            <p className="text-sm font-bold">
                                {player.battingStyle}
                            </p>
                        </div>

                        {/* Bowling */}
                        <div className="rounded-xl bg-base-200 p-3">
                            <div className="mb-1 flex items-center gap-2 text-secondary">
                                <GiWhistle />
                                <span className="text-xs font-semibold">
                                    Bowling
                                </span>
                            </div>

                            <p className="text-sm font-bold">
                                {player.bowlingStyle}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-4 flex items-center justify-between gap-3">

                    {/* Price */}
                    <div>
                        <p className="text-xs text-base-content/60">
                            Player Price
                        </p>

                        <p className="text-xl font-extrabold text-primary">
                            ${player.price}
                        </p>
                    </div>

                    {/* Choose Button */}
                    <button
                        onClick={() => handleSelectPlayer()}
                        className="btn btn-primary rounded-xl px-5 shadow-sm transition-all hover:scale-105" disabled={isSelected ? true : false}>
                        {isSelected === true ? "Selected" : "Choose Player"}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PlayerCard;