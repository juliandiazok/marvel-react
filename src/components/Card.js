import React from 'react';
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

function Card({element,toggleModal,onCharacterChange}) {
    const onClick = () => {
        toggleModal()
        onCharacterChange(element)
    }
    return (
        <CardStyle onClick={onClick}>
            <a id="myCard" className="card text-white" href="/#">
                <img src={element.thumbnail.path + "/portrait_uncanny." + element.thumbnail.extension} className="card-img" alt={element.name}></img>
                <div className="card-img-overlay d-flex flex-column">
                    <h6 className="mt-auto name">
                        <strong>{element.name}</strong>
                    </h6>
                </div>
                <div className="card-img-overlay">
                    <div className="favorito">
                        <div>
                            <i className="far fa-star fav"/>
                        </div>
                    </div>
                </div>
            </a>
        </CardStyle>
    )
}

export default Card
