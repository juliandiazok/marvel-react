import React from 'react';
import { Star } from 'react-bootstrap-icons';
import styled from "styled-components";

// styles Card
export const CardStyle = styled.header`
.favorito {
    float: right;
}
`;
// styles Card

function Card({element}) {
    return (
        <CardStyle>
            <a href="-" className="card text-white">
                <img src={element.thumbnail.path + "/portrait_uncanny." + element.thumbnail.extension} className="card-img" alt="Iron Man"></img>
                <div className="card-img-overlay d-flex flex-column">
                    <h6 className="mt-auto ">
                        <strong>{element.name}</strong>
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
        </CardStyle>
    )
}

export default Card
