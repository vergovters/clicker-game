import React from 'react';
import MenuButtons from '../../common/MenuButtons/MebuButtons';
import styles from './Navigation.module.css';

import coin from '../../assets/menu/coin.png';
import user from '../../assets/menu/user.png';
import shop from '../../assets/menu/shopping-cart.png';
import todo from '../../assets/menu/to-do-list.png';
import peper from '../../assets/menu/pepper.png';
import {
	MAIN_PAGE,
	PROFILE_PAGE,
	SHOP_PAGE,
	TASK_PAGE,
} from 'src/utils/constants';

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<ul>
				<li>
					<MenuButtons path={PROFILE_PAGE} title='Profile' icon={user} />
				</li>
				<li>
					<MenuButtons path={SHOP_PAGE} title='Shop' icon={shop} />
				</li>
				<li>
					<MenuButtons path={MAIN_PAGE} title='Home' icon={coin} />
				</li>
				<li>
					<MenuButtons path={TASK_PAGE} title='Taks' icon={todo} />
				</li>
				<li>
					<MenuButtons path='/' title='Smth' icon={peper} />
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
