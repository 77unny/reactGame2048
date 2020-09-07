import { getRandomInteger } from './number';
import { MAX_POS } from '../constants';

export const getInitailTileList = () => {
  const tileList = [];
  const tile1 = makeTile(tileList);
  const tile2 = makeTile(tileList);
  tileList.push(tile1);
  tileList.push(tile2);
  return tileList;
};

export const checkCollision = (tileList, tile) => tileList.some(item => item.x === tile.x && item.y === tile.y);

let currentID = 0;
export const makeTile = tileList => {
  let tile;

  while (!tile || checkCollision(tileList, tile)) {
    tile = {
      id: currentID++,
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2,
    };
  }
  return tile;
};
