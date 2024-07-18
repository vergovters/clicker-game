import { planets } from './Planets';

export const getCurrentPlanet = (currentLvl) => {
	const planet = planets.find((planet) => planet.id === currentLvl);

	return planet;
};
