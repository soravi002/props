import React from 'react';
import Player from './player';
import playersData from './players.json';

const PlayersList = () => {
    return (
        <div>
            {playersData.map((player, index) => (
            <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;