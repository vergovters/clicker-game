import React from 'react';
import MenuButtons from '../../common/MenuButtons/MebuButtons';
import styles from './Navigation.module.css';

import coin from '../../assets/menu/coin.png';
import user from '../../assets/menu/user.png';
import shop from '../../assets/menu/shopping-cart.png';
import todo from '../../assets/menu/to-do-list.png';
import peper from '../../assets/menu/pepper.png';

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<ul>
				<li>
					<MenuButtons path='/' title='Profile' icon={user} />
				</li>
				<li>
					<MenuButtons path='/shop' title='Shop' icon={shop} />
				</li>
				<li>
					<MenuButtons path='/' title='Home' icon={coin} />
				</li>
				<li>
					<MenuButtons path='/' title='Taks' icon={todo} />
				</li>
				<li>
					<MenuButtons path='/' title='Smth' icon={peper} />
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
