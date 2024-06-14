import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const LeagueBar = observer(() => {
    const {player} = useContext(Context)
    return (
        <ListGroup>
            {player.leagues.map(league =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={league.id === player.selectedLeague.id}
                    onClick={() => player.setSelectedLeague(league)}
                    key={league.id}
                >
                    {league.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default LeagueBar;