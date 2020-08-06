import React from 'react';
import { MyHeader } from '../Elements.style';
import { Link, Route } from 'react-router-dom';
import Filters from '../components/Filters';
import CreateButton from '../api/components/CreateButton';

const Header = () => {
	return (
		<MyHeader
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<nav className='container'>
				<div className='left'>
					<Link to='/'>
						<h1>Our Offering</h1>
					</Link>
					<Link to='/buildings'>Edit Buildings</Link>
					<Route path='/' exact component={Filters} />
					<Route path='/buildings' component={CreateButton} />
				</div>
				<img src={require('../assets/logo512.png')} alt='' />
			</nav>
		</MyHeader>
	);
};
export default Header;
