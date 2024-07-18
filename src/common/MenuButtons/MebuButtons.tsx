import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuButtons } from 'src/types/common/MenuButtons';
import './MebuButtons.css';

const MebuButtons: React.FC<IMenuButtons> = ({ title, icon, path }) => {
	return (
		<Link to={path} style={{ textDecoration: 'none', color: 'white' }}>
			<div className='menu-button'>
				<img src={icon} />
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default MebuButtons;
