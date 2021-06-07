import React from 'react';
import Card from './Card';
import styled from "styled-components";

// styles Cards
export const CardsStyle = styled.header`

.containerHero {
    margin: 4em 2em 0 2em;
    padding-bottom: 4em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

@media (max-width: 600px) {
    .containerHero {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 350px) {
    .containerHero {
      grid-template-columns: 1fr;
    }
  }
`;
// styles Cards

function Cards({elements}) {
    return (
        <CardsStyle>
            <section className="containerHero">
                {
                    elements.map(element => (
                            <Card key={element.id} element={element} />)
                    )
                }
            </section>
        </CardsStyle>
    )
}

export default Cards
