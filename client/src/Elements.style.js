import styled from 'styled-components';
import { motion } from 'framer-motion';

//**********************************
//* --------- HEADER  --------
// **********************************
export const MyHeader = styled(motion.header)`
	background: var(--black);
	position: fixed;
	z-index: 1;
	margin: 0 auto 0 0;
	top: 0;
	/* Wrap header components */
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		/* Wrap  H1 and Filters */
		.left {
			display: flex;
			align-items: center;
			justify-content: space-between;

			h1 {
				margin: 0;
				color: var(--white);
				display: inline;
			}
		}
		img {
			width: 4rem;
		}
	}

	@media (min-width: 320px) {
		padding: 0.6rem;
		width: 100vw;
		.left {
			width: 100%;
		}
		h1 {
			font-size: 1.2em;
		}
		img {
			display: none;
		}
	}
	@media (min-width: 768px) {
		padding: 1rem;
		.left {
			width: auto;
		}
		img {
			display: inline;
		}
	}
`;

//**********************************
//* --------- FILTER  --------
// **********************************
export const MyFilters = styled.div`
	color: var(--white);
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	/*  Wrap for Type, Status, Reset buttons */
	div {
		display: flex;
	}

	@media (min-width: 320px) {
		margin-left: 0;
		margin-right: 1rem;
		width: 35%;
	}
	@media (min-width: 768px) {
		margin-left: 2rem;
	}
`;

//**********************************
//* ------ MAIN CONTAINER --------
// **********************************
// export const MyContainer = styled.div`
// 	position: relative;
// 	max-width: 1240px;
// 	margin: auto;

// 	@media (min-width: 320px) {
// 		padding: 0.4rem;
// 	}
// `;

//**********************************
//* ------ CARD CONTAINER --------
// **********************************
export const MyCardGrid = styled(motion.div)`
	display: flex;
	flex-wrap: ${({ sideBar }) => (sideBar ? 'nowrap' : 'wrap')};
	justify-content: ${({ sideBar }) =>
		sideBar ? 'flex-start' : 'space-around'};
	overflow-x: auto;
	overflow-y: hidden;
	/* Hide scroll bar for Firefox */
	scrollbar-width: none;
	/* Hide scroll bar for Chrome */
	&::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 320px) {
		flex-direction: ${({ sideBar }) => (sideBar ? 'row' : 'column')};
		margin-top: 5.5rem;
		flex-direction: row;
	}
	@media (min-width: 768px) {
		margin-top: 6.5rem;
	}
	@media (min-width: 1024px) {
		flex-direction: ${({ sideBar }) => (sideBar ? 'column' : 'row')};
		width: 100%;
		overflow-x: auto;
		scrollbar-width: none;
	}
`;

//**********************************
//* ------ CARD --------
// **********************************
export const MyCard = styled(motion.div)`
	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	@media (min-width: 320px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0 0 auto;
		padding-top: 0.5rem;
		width: ${({ sideBar }) => (sideBar ? '70%' : '100%')};
		margin: 0.2rem;

		h2 {
			font-size: ${({ sideBar }) => (sideBar ? '1rem' : '1.5rem')};
		}
		h2 {
			font-size: ${({ sideBar }) => (sideBar ? '1rem' : '1.5rem')};
		}
	}
	@media (min-width: 768px) {
		width: 45%;
	}
	@media (min-width: 1024px) {
		width: 40%;
		margin: 0 0 1rem 1rem;
		padding: ${({ sideBar }) => (sideBar ? '1rem' : '0')};
	}
`;

//**********************************
//* ------ CARD DETAILS --------
// **********************************
export const MyCardDetails = styled.div`
	width: 95%;
	transform: translateY(-1rem);
	background: var(--white);

	h2 {
		font-size: 1.5rem;
		text-align: center;
		font-weight: 200;
	}
`;

//**********************************
//* ------ CARD DETAILS LIST --------
// **********************************
export const MyCardDetailsList = styled.ul`
	list-style-type: none;
	padding-left: 0;
	margin: 0;
	li {
		padding: 0.5rem 0.7rem;
	}
`;

//**********************************
//* ------ CARD DETAILS ROW --------
// **********************************
export const MyCardDetailsRow = styled.li`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0.5rem 0;
`;

//**********************************
//* ------ CARD BUTTON --------
// **********************************
export const MyCardButton = styled(motion.button)`
	width: 100%;
	background-color: var(--black);
	border: none;
	color: var(--white);
	padding: 0.5rem 0;
	cursor: pointer;
	font-size: 1rem;
`;

//**********************************
//* ------ SIDE BAR --------
// **********************************
export const MySideBar = styled(motion.div)`
	padding: 1rem;
	box-shadow: 1px 1px 15px var(--black);
	border-radius: 15px;
	background: var(--black);
	color: var(--white);
	z-index: 2;
	/* Hide scroll bar for Firefox */
	scrollbar-width: none;
	/* Hide scroll bar for Chrome */
	&::-webkit-scrollbar {
		display: none;
	}

	h1 {
		text-align: center;
		font-weight: 200;
		font-size: 2.5rem;
	}

	img {
		border-radius: 15px;
	}

	@media (min-width: 320px) {
		position: initial;
		max-width: 100%;
	}
	@media (min-width: 1024px) {
		position: fixed;
		right: 0;
		top: 0;
		max-width: 55%;
		height: 100%;
		overflow-y: scroll;
	}
`;

//**********************************
//* ------ SIDE DETAILS --------
// **********************************
export const MySideDetails = styled.ul`
	list-style-type: none;
	padding-left: 0;
	margin: 0;
	font-size: 0.8rem;
	* {
		margin: 0;
	}
`;

//**********************************
//* ------ SIDE CLOSE BUTTON --------
// **********************************
export const MyCloseButton = styled(motion.button)`
	position: absolute;
	top: 0;
	right: 0;
	background: var(--white);
	border: none;
	color: var(--black);
	font-weight: 700;
	font-size: 1.5rem;
	cursor: pointer;
	border-radius: 100%;
	padding: 0.2rem 0.6rem;
`;

//**********************************
//* ------ SIDE DETAILS ROW --------
// **********************************
export const MySideDetailsRow = styled.li`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0.5rem 0;
	font-weight: 300;
	border-top: 1px solid var(--white);
	&:last-child {
		border-bottom: 1px solid var(--white);
	}
`;

//**********************************
//* ------ SIDE TABLE --------
// **********************************
export const MyTable = styled.table`
	width: 100%;

	tr {
		text-align: left;
		width: 100%;
		font-weight: 300;
	}

	th {
		width: 25%;
		border-bottom: 1px solid var(--white);
		border-top: 1px solid var(--white);
		padding: 0.5rem 0;
		font-size: 0.9rem;
		&:last-child {
			width: 50%;
		}
	}

	td {
		border-bottom: 1px solid white;
		padding: 1rem 0;
		font-size: 0.8rem;
	}
`;
