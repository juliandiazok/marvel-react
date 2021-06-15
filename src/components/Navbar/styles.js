import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: ${(props) => props.theme.colorsNav[props.mode]};
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((50vw - 1000px) / 2);
	z-index: 10;
	margin: 4px 4px 4px 4px;
	-webkit-box-shadow: 0px 15px 10px -15px gray, 0px -15px 10px -15px gray; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ 
    -moz-box-shadow:    0px 15px 10px -15px gray, 0px -15px 10px -15px gray;  /* Firefox 3.5 - 3.6 
    box-shadow:         0px 15px 10px -15px gray, 0px -15px 10px -15px gray;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 
    /* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
	padding: 0 0.3rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: red;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 16px;
	opacity: 0.4;
	width: 100vw;
	white-space: nowrap;
	@media screen and (max-width: 510px) {
		display: none;
	}
`;

export const NavSearch = styled.div`
	margin-left: 1vw;
	color: ${(props) => props.theme.colorsIcon[props.mode]};
	font-size: 16px;
	opacity: 0.4;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
  white-space: nowrap; */
	@media screen and (max-width: 510px) {
		display: none;
	}
`;

export const InputSearch = styled.div`
	margin-left: 0.5vw;
	background-color: white;
	outline: none !important;
	border-width: 0px;
	border: none !important;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
  white-space: nowrap; */
	@media screen and (max-width: 510px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	font-size: 18px;
	/* Third Nav */
	/* justify-content: flex-end;
  width: 100vw; */
`;

export const NavTheme = styled.nav`
	color: #bdbdbd;
	border-radius: 2px;
	padding: 10px 12px;
	outline: none;
	border: none;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	margin-right: 8px;
	&:hover {
		transition: all 0.2s ease-in-out;
		border: 1px solid #bdbdbd;
		color: #bdbdbd;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 2px;
	padding: 10px 12px;
	color: #bdbdbd;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-right: 24px;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: red;
		color: #bdbdbd;
	}
	@media screen and (max-width: 510px) {
		margin-right: 5px;
	}
`;

export const NavHidden = styled.nav`
	display: none;
	@media screen and (max-width: 510px) {
		margin-top: -15px;
		margin: -15px 4px 4px 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${(props) => props.theme.colorsNav[props.mode]};
		padding-top: 5px;
		border-top: 0.5px solid #e0e0e0;
	}
`;

export const NavHiddenSearch = styled.nav`
	margin-left: 1vw;
	color: ${(props) => props.theme.colorsIcon[props.mode]};
	font-size: 16px;
	opacity: 0.3;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const NavHiddenInput = styled.nav`
	margin-left: 0.5vw;
	opacity: 0.4;
	margin-bottom: 4px;
	background-color: white;
	outline: none !important;
	border-width: 0px;
	border: none !important;
`;
