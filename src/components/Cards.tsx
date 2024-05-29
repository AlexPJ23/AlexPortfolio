import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardsProps {
    cardTitle: string;
    cardDescription: string;
    cardImage: string;
    cardLink: string;
}

const Cards : React.FC<CardsProps> = ({cardTitle,cardDescription,cardImage,cardLink}) => {
    return( 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardImage} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                    {cardDescription}
                </Card.Text>
                <Button variant="primary" href={cardLink}>GitHub</Button>
            </Card.Body>
        </Card>
    );
};

export default Cards;