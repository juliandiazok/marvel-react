import React from 'react';
import './Card.css'

function Card({title, imageSource}) {
    return (
        <div className="card text-white">
            <img src={imageSource} class="card-img" alt="Iron Man"></img>
            <div className="card-img-overlay d-flex flex-column">
                <h6 class="mt-auto ">
                    <strong>{title}</strong>
                </h6>
            </div>
            <div className="card-img-overlay">
                <div class="favorito">
                    <button>Fav</button>
                </div>
            </div>
        </div>
    )
}

export default Card
