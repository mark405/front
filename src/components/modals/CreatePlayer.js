import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createPlayer, fetchPlayers, fetchLeagues} from "../../http/playerApi";
import {observer} from "mobx-react-lite";

const CreatePlayer = observer(({show, onHide}) => {
    const {player} = useContext(Context)
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchLeagues().then(data => player.setLeagues(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPlayer = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('age', `${age}`)
        formData.append('height', `${height}`)
        formData.append('img', file)
        formData.append('leagueId', player.selectedLeague.id)
        createPlayer(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add player
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{player.selectedLeague.name || "Choose league"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {player.leagues.map(league =>
                                <Dropdown.Item
                                    onClick={() => player.setSelectedLeague(league)}
                                    key={league.id}
                                >
                                    {league.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Input player name"
                    />
                    <Form.Control
                        value={age}
                        onChange={e => setAge(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Input player age"
                        type="number"
                    />
                    <Form.Control
                        value={height}
                        onChange={e => setHeight(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Input player height"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addPlayer}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePlayer;