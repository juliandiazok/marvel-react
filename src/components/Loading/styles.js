import styled from 'styled-components';

// styles Cards
export const LoadingStyle = styled.header`
	margin-top: 6vh;
	color: red;
	-webkit-text-stroke-width: 0.5px;
	-webkit-text-stroke-color: black;
	text-decoration: none;
	height: 10vh;
	border-radius: 8px;
	margin-bottom: 1.5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	text-align: center;

	h2 {
		margin-top: 13vh;
	}

	.ironImage {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 120px;
		height: 120px;
		margin: -60px 0 0 -60px;
		-webkit-animation: spin 4s linear infinite;
		-moz-animation: spin 4s linear infinite;
		animation: spin 4s linear infinite;
	}
	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
// styles Cards
