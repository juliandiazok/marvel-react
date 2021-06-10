import React from 'react';
import Card from '../Card';
import {CardsStyle} from './styles'

const Cards = ({elements,isLoading,toggleModal,onCharacterChange}) => {
      return isLoading ? <h1>Cargando elementos...</h1> :
        <CardsStyle>
            <section className="containerHero">
                {
                    elements.map(element => (
                            <Card key={element.id} element={element} toggleModal={toggleModal} onCharacterChange={onCharacterChange}/>)
                    )
                }
            </section>
        </CardsStyle>
}

export default Cards
