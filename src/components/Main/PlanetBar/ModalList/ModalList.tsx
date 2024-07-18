import React from 'react';
import styles from './ModalList.module.css';
import { planets } from 'src/helpers/Planets';

const ModalList = ({ setIsOpen }) => {
	return (
		<div className={styles.modalList}>
			<div className={styles.backdrop}>
				<button onClick={() => setIsOpen(false)}>X</button>
				<div onClick={(e) => e.stopPropagation()}>
					{planets.map(
						(planet) => (
							console.log(planet),
							(
								<div key={planet.id}>
									<img src={planet.image} className={styles.image} alt='' />
									{planet.title} -{planet.price}
								</div>
							)
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ModalList;
