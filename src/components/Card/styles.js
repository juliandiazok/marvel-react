import styled from 'styled-components';

// styles Card
export const CardStyle = styled.header`
	:hover {
		box-shadow: 3px 6px 3px black;
	}

	.favorito {
		float: right;
		cursor: default;
	}

	.name {
		text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black,
			1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
	}

	.card {
		cursor: pointer;
	}

	.fav {
		text-shadow: 0 0 3px black;
	}
`;
// styles Card
