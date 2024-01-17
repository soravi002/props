import React from 'react';
import Card  from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";

function Player({ name, team, nationality, jerseyNumber, age, imageURL }) {
    return (
        <Card style={{ width: '18rem', margin: '50px', border: '2px', borderRadius: '25px', backgroundColor: 'gold', display: 'inline-grid', hover: 'true', cursor: 'pointer', boxShadow: '10px 10px 5px grey' }}>
            <Card.Img variant="top" src={imageURL} style={{ width: '150px', height: '200px', borderRadius: '25px', position: 'relative', left: '60px' }} />
            <Card.Body>
                <Card.Title style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: 'fantasy', fontSize: '20px' }}>{name}</Card.Title>
                <Card.Text style={{ textAlign: 'center', color: 'black', fontFamily: 'cursive', fontSize: '15px' }}>
                    Team: {team}<br />
                    Nationality: {nationality}<br />
                    Jersey Number: {jerseyNumber}<br />
                    Age: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Player;