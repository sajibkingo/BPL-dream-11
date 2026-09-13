import { TbTrash } from "react-icons/tb";
import type { Iplayer } from "../types/playerType";
import type { Dispatch, SetStateAction } from "react";

interface ISelectedPlayerCardProps {
    player: Iplayer;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({ player, selectedPlayers, setSelectedPlayers, coin, setCoin }: ISelectedPlayerCardProps) => {
    const handleRemovePlayer = (player: Iplayer) => {
        const restPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName)

        setSelectedPlayers(restPlayers);

        const newCoinPrice = coin + player.price
        setCoin(newCoinPrice);
    }

    return (
        <div className='flex justify-between items-center gap-4 border-2 border-gray-200 py-2 px-4 rounded-xl'>
            <div className='flex gap-2'>
                <img src={player.playerImg} alt="" className='
                h-[50px] w-[40px]' />
                <div>
                    <h2 className='font-bold text-2xl'>{[player.playerName]}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <span className='text-red-500 font-bold cursor-pointer' onClick={() => handleRemovePlayer(player)}>
                <TbTrash />
            </span>
        </div>
    );
};

export default SelectedPlayerCard;