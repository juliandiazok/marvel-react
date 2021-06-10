import React from 'react';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import {CardsStyle} from './styles'

const Cards = ({elements,isLoading,toggleModal,onCharacterChange}) => {
      return isLoading ? <Loading></Loading> :
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
