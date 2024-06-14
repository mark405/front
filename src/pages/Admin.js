import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreatePlayer from "../components/modals/CreatePlayer";
import CreateLeague from "../components/modals/CreateLeague";

const Admin = () => {
    const [leagueVisible, setLeagueVisible] = useState(false)
    const [playerVisible, setPlayerVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setLeagueVisible(true)}
            >
                Add league
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPlayerVisible(true)}
            >
                Add player
            </Button>
            <CreatePlayer show={playerVisible} onHide={() => setPlayerVisible(false)}/>
            <CreateLeague show={leagueVisible} onHide={() => setLeagueVisible(false)}/>
        </Container>
    );
};

export default Admin;