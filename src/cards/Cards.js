
import React, { Component } from 'react';
import CardStyle from './CardStyle';
import {Row} from 'react-bootstrap';
import data from './cardData';

class Cards extends Component {
    
    render() {

        let data = this.props.data.map(data =>{
            return{
                
            }
        });

        return (
            <>
                <Row>
                    <CardStyle title={data.title} text={data.text} buttonText={data.buttonText}/>
                    <CardStyle/>
                    <CardStyle/>
                    <CardStyle/>
                    <CardStyle/>
                </Row>
            </>
        )
    }
}

export default Cards
