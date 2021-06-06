import React from 'react';
import Card from './Card';
import styled from "styled-components";

// styles Cards
export const CardsStyle = styled.header`

.columna {
    margin-top: 2em;
}

.row:first-child {
    margin-top: 5em;
}

.row:last-child {
    margin-bottom: 5em;
}

.row {
    display: flex;
    }
`;
// styles Cards

function Cards({elements}) {
    return (
        <CardsStyle>
            <div className="Cards container d-flex justify-content-center align-items-center">
                <div className="row">
                    {
                        elements.map(element => (
                            <div className="col-md-3 columna" key={element.id}>
                                <Card element={element} />
                            </div>)
                        )
                    }
                </div>
            </div>
        </CardsStyle>
    )
}

export default Cards
