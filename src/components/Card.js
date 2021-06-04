import React from 'react';
import './Card.css';
import { Star } from 'react-bootstrap-icons';

function Card({title, imageSource}) {
    return (
        <a href="-" className="card text-white">
            <img src={imageSource} className="card-img" alt="Iron Man"></img>
            <div className="card-img-overlay d-flex flex-column">
                <h6 className="mt-auto ">
                    <strong>{title}</strong>
                </h6>
            </div>
            <div className="card-img-overlay">
                <div className="favorito">
                    <div>
                        <Star size={22}  />
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card
