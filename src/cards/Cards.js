import CardStyle from './CardStyle';
import { Row } from 'react-bootstrap';
import React, { Component } from 'react';
import data from './cardData';

class Cards extends Component {

    render() {

        let cardsArray = data.map(card => {

            return <CardStyle buttonText={card.buttonText} text={card.text} title={card.title}/>
        });

        return (
            <>
                <Row>
                    {cardsArray}
                </Row>
            </>
        )
    }
}

export default Cards
