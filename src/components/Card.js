import React from 'react';
import { Star } from 'react-bootstrap-icons';
import styled from "styled-components";

// styles Card
export const CardStyle = styled.header`
.favorito {
    float: right;
}

.name {
    text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
}
`;
// styles Card

function Card({element}) {
    return (
        <CardStyle>
            <a href="-" className="card text-white">
                <img src={element.thumbnail.path + "/portrait_uncanny." + element.thumbnail.extension} className="card-img" alt="Iron Man"></img>
                <div className="card-img-overlay d-flex flex-column">
                    <h6 className="mt-auto name">
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
