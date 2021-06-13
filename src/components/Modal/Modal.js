import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ComicLoading from '../ComicLoading/Loading';
import {ModalStyle,OverlayStyle} from './styles'


function Modal({activeCharacter={},toggleModal}) {
    const[comic,setComic] = useState([]);
    const[isComicLoading,setComicLoading] = useState(true);

    useEffect(()=>{
      const fetch = async()=>{
          const json = await axios(`https://gateway.marvel.com:443/v1/public/characters/${activeCharacter.id}/comics?orderBy=onsaleDate&apikey=c70bee055661b1eabc28f40a0fea1796&limit=100`)
          setComicLoading(false)
          setComic(json.data.data.results)
      }

      fetch()  
      },[activeCharacter.id])
    return (
        <ModalStyle>
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{activeCharacter.name}</h2>
                        <i className="far fa-window-close cerrar" aria-label="Close" onClick={toggleModal}></i>
                    </div>
                    <div className="modal-body">
                        <div className="grid-container">
                            <div className="image">
                                <img src={activeCharacter.thumbnail.path + "/portrait_uncanny." + activeCharacter.thumbnail.extension} className="card-img" alt={activeCharacter.name}></img>
                            </div>
                            <div className="modal-details">
                                <div className="description">
                                    {activeCharacter.description}
                                </div>
                                <div className="comics">
                                    <h5>Number of comics: {activeCharacter.comics.available}</h5>
                                    {isComicLoading ? <ComicLoading></ComicLoading> : 
                                    <div className="comics-container">{comic.map(comic =><li key={comic.id}><a className="comic-link" href={comic.urls[0].url}>{comic.title}</a></li>)}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>  
            </div>
            <OverlayStyle onClick={toggleModal}/>
        </ModalStyle>
    )
}

export default Modal 
