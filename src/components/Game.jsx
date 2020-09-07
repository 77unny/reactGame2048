import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constants';
import { getInitialTileList } from '../utils/tile';
import Tile from './Tile';
import useMoveTile from '../hooks/useMoveTile';

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, index => (
          <div key={index} className="grid-row">
            {times(MAX_POS, index2 => (
              <div key={index2} className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map(item => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
