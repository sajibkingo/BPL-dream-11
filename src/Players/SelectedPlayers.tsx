import type { Dispatch, SetStateAction } from 'react';
import type { Iplayer } from '../types/playerType';
import SelectedPlayerCard from './SelectedPlayerCard';

interface ISelectedPlayersProps {
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }: ISelectedPlayersProps) => {

    if (selectedPlayers.length === 0) {
        return (
            <h2 className='font-bold text-3xl my-8 text-center mb-30'>No selected players</h2>
        )
    }

    return (
        <div className='grid grid-cols-1 gap-4 mt-4'>
            {selectedPlayers.map((player: Iplayer, ind: number) => {
                return (
                    <SelectedPlayerCard player={player}
                        key={ind}
                        coin={coin}
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                )
            })}
        </div>
    );
};

export default SelectedPlayers;