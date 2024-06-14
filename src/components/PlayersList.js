import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PlayerItem from "./PlayerItem";

const PlayersList = observer(() => {
    const {player} = useContext(Context)

    return (
        <Row className="d-flex">
            {player && player.players && player.players.map(player =>
                <PlayerItem key={player.id} player={player}/>
            )}
        </Row>
    );
});

export default PlayersList;