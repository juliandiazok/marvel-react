import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import axios from 'axios';


// styles Modal
export const ModalStyle = styled.header`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;

>div{
    z-index:50;
}


.modal-header {
    padding: 10px 0px 0px 12px;
    background-color: #EF5350;
    color: white;
  }
  
  .modal-body {padding: 2px 16px;}
  
  .modal-footer {
    padding: 2px 16px;
    margin-top: 4px;
    background-color: #EF5350;
    color: white;
  }
  
  .modal-content {
    margin: auto;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;
    max-width: 1000px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "image modal-details";
    @media screen and (max-width: 300px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 0px;
      grid-template-areas:
      "modal-details";
    }
  }
  .image { 
      grid-area: image;
      max-width: 300px;
      max-heigth: 500px;
      display: flex;
      align-items: center;
      margin-left: -5px; 
      @media screen and (max-width: 300px) {
        display: none;
      }
    }

  .modal-details { 
      grid-area: modal-details;
      margin-left: 10px; 
    }

    .comic-link {
      color: #EF5350
    }

    .cerrar {
      margin-right: 15px;
      display: flex;
      align-items: center;
      font-size: 22px;
    }

    .comics-container {
        height:50vh;
        width:auto;
        border:1px solid #ccc;
        font:16px/26px Georgia, Garamond, Serif;
        overflow:auto;
        border: none;
        @media screen and (max-width: 700px) {
          height:40vh;
        }
        @media screen and (max-width: 700px) {
          height:30vh;
        }
        @media screen and (max-width: 510px) {
          height:25vh;
        }
        @media screen and (max-width: 380px) {
          height:18vh;
        }
    }
  
  @keyframes animatetop {
    from {bottom: -300px; opacity: 0}
    to {bottom: 0; opacity: 1}
  }
`;
// styles Modal

// styles Overlay
export const OverlayStyle = styled.span`
background-color: rgba(255, 255, 255, 0.5) ;
position: absolute;
width: 100%;
height: 100%;
z-index: 30;
`;
// styles Overlay


function Modal({activeCharacter={},toggleModal}) {
    const[comic,setComic] = useState([])

    useEffect(()=>{
      const fetch = async()=>{
          const json = await axios(`https://gateway.marvel.com:443/v1/public/characters/${activeCharacter.id}/comics?orderBy=onsaleDate&apikey=c70bee055661b1eabc28f40a0fea1796&limit=100`)
          console.log(json.data.data.results)
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
                                    <div className="comics-container">{comic.map(comic =><li key={comic.id}><a className="comic-link" href={comic.urls[0].url}>{comic.title}</a></li>)}</div>
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
