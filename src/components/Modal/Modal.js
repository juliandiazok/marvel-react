import React, { useState, useEffect } from 'react';
import { getComics } from '../../api/comics';
import ComicLoading from '../ComicLoading/Loading';
import { ModalStyle, OverlayStyle } from './styles';

function Modal({ activeCharacter = {}, toggleModal, theme }) {
	const [comic, setComic] = useState([]);
	const [isComicLoading, setComicLoading] = useState(true);
	useEffect(() => {
		getComics(activeCharacter.id)
			.then((comics) => {
				setComic(comics);
			})
			.finally(() => {
				setComicLoading(false);
			});
	}, [activeCharacter.id]);
	const getImageUrl = (character) => {
		const { path = '', extension = '' } = character?.thumbnail || {};
		const URL = `${path}/portrait_uncanny.${extension}`;
		return URL;
	};
	return (
		<ModalStyle mode={theme}>
			<div>
				<div className='modal-content'>
					<div className='modal-header'>
						<h2>{activeCharacter.name}</h2>
						<i
							className='far fa-window-close close'
							aria-label='Close'
							onClick={toggleModal}></i>
					</div>
					<div className='modal-body'>
						<div className='grid-container'>
							<div className='image'>
								<img
									src={getImageUrl(activeCharacter)}
									className='card-img'
									alt={activeCharacter.name}></img>
							</div>
							<div className='modal-details'>
								<div className='description'>{activeCharacter.description}</div>
								<div className='comics'>
									<h5>
										Number of comics:{' '}
										{activeCharacter?.comics?.available || '0'}
									</h5>
									{isComicLoading ? (
										<ComicLoading></ComicLoading>
									) : (
										<div className='comics-container'>
											{comic.map((comic) => (
												<li key={comic.id}>
													<a className='comic-link' href={comic.urls[0].url}>
														{comic.title}
													</a>
												</li>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className='modal-footer'></div>
				</div>
			</div>
			<OverlayStyle onClick={toggleModal} />
		</ModalStyle>
	);
}

export default Modal;
