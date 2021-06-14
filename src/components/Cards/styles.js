import styled from 'styled-components';

// styles Cards
export const CardsStyle = styled.header`
	.containerHero {
		margin: 4em 2em 0 2em;
		padding-bottom: 4em;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	@media (min-width: 1500px) {
		.containerHero {
			grid-template-columns: repeat(5, 1fr);
		}
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

	.nofav {
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
	}
`;
// styles Cards
