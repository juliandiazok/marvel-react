import React from 'react';
import Card from './Card';
import './Cards.css';
import image1 from   '../assets/image1.jpg';

const cards = [
    {
        id: 1,
        title: 'Iron Man',
        favorite: true,
        image: image1
    },
    {
        id: 2,
        title: 'Captain America',
        favorite: false,
        image: image1
    },
    {
        id: 3,
        title: 'Hulk',
        favorite: false,
        image: image1
    }
]

function Cards() {
    return (
        <div className="Cards container d-flex justify-content-center align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} />
                        </div>)
                    )
                }
            </div>
        </div>
    )
}

export default Cards
