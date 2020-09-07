import { useEffect } from 'react';
import { addKeyObserver, removeKeyObserver } from '../utils/keyboard';
import { makeTile, moveTile } from '../utils/tile';

export default function useMoveTile({ tileList, setTileList, setScore }) {
  const moveAndAdd = ({ x, y }) => {
    const newTileList = moveTile({ tileList, x, y });
    const score = newTileList.reduce((acc, item) => (item.isMerged ? acc + item.value : acc), 0);
    setScore(v => v + score);
    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    setTileList(newTileList);
  };

  const moveUp = () => {
    moveAndAdd({ x: 0, y: -1 });
  };
  const moveDown = () => {
    moveAndAdd({ x: 0, y: 1 });
  };
  const moveLeft = () => {
    moveAndAdd({ x: -1, y: 0 });
  };
  const moveRight = () => {
    moveAndAdd({ x: 1, y: 0 });
  };

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    };
  });
}
