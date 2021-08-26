import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import MazeGame from '../images/mazegame.png';
import VBA from '../images/vba.png';
import Efit from '../images/efit.png';
import SpaceBound from '../images/spacebound.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Face Recognition Attendance',
    desc:
      'VBA is an attendance monitoring system, that uses the OpenCV library for python, to identify individuals and log their attendance.',
    img: VBA,
    href: 'https://github.com/Parides/vba',
  },
  {
    id: uuidv4(),
    name: 'E-Fit',
    desc:
      'E-FIT is a health and fitness concept website that provides the user with useful muscle group infromation and effective excercises & workouts',
    img: Efit,
    href: 'https://github.com/Parides/efit',
  },
  {
    id: uuidv4(),
    name: 'Space Bound',
    desc:
      'Fight off any incoming rocks from the asteroid that is coming towards earth. The more asteroids you destroy the higher the score.',
    img: SpaceBound,
    href: 'https://github.com/Parides/spacebound',
  },
  {
    id: uuidv4(),
    name: 'A-maze-ing',
    desc:
      'Navigate through the maze, find the treasure chests with keys scattered all around the map to unlock the doors that lead to the exit',
    img: MazeGame,
    href: 'https://github.com/Parides/maze-game',
  },
];

export default projects;
