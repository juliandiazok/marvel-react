import React from 'react';
import './Card.css'

function Card() {
    return (
        <div className="card text-white">
            <img src="https://esporters.today/__export/1598640301782/sites/gammers/img/2020/08/28/iron_man_fortnite_1.jpeg_691115875.jpeg" class="card-img" alt="Iron Man"></img>
            <div className="card-img-overlay d-flex flex-column">
                <h6 class="mt-auto">
                    <strong>Titulo</strong>
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
