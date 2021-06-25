import styled from 'styled-components';

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

	> div {
		z-index: 50;
	}

	.modal-header {
		padding: 10px 0px 0px 12px;
		background-color: #ef5350;
		color: white;
	}

	.modal-body {
		padding: 2px 16px;
	}

	.modal-footer {
		padding: 2px 16px;
		margin-top: 4px;
		background-color: #ef5350;
		color: white;
	}

	.modal-content {
		margin: auto;
		color: ${(props) => props.theme.modalFontColor[props.mode]};
		border: 1px solid #888;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		animation-name: animatetop;
		animation-duration: 0.4s;
		max-width: 1000px;
		background-color: ${(props) => props.theme.modalBackground[props.mode]};
		opacity: 1;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-template-areas: 'image modal-details';
		@media screen and (max-width: 300px) {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			gap: 0px;
			grid-template-areas: 'modal-details';
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
		color: #ef5350;
	}

	.close {
		margin-top: -8px;
		margin-right: 15px;
		display: flex;
		align-items: center;
		font-size: 35px;
		cursor: pointer;
	}

	.comics-container {
		height: 50vh;
		width: auto;
		border: 1px solid #ccc;
		font: 16px/26px Georgia, Garamond, Serif;
		overflow: auto;
		border: none;
		@media screen and (max-width: 700px) {
			height: 40vh;
		}
		@media screen and (max-width: 700px) {
			height: 30vh;
		}
		@media screen and (max-width: 510px) {
			height: 25vh;
		}
		@media screen and (max-width: 380px) {
			height: 18vh;
		}
	}

	@keyframes animatetop {
		from {
			bottom: -300px;
			opacity: 0;
		}
		to {
			bottom: 0;
			opacity: 1;
		}
	}
`;
// styles Modal

// styles Overlay
export const OverlayStyle = styled.span`
	background-color: rgba(255, 255, 255, 0.5);
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 30;
`;
// styles Overlay
