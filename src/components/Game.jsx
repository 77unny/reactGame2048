import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constants';
import { getInitailTileList } from '../utils/tile';

export default function Game() {
  const [tileList, setTileList] = useState(getInitailTileList);

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
          <div key={item.id} className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
            <div className="tile-inner">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
