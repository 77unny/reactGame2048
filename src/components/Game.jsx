import React from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constants';

export default function Game() {
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, () => (
          <div className="grid-row">
            {times(MAX_POS, () => (
              <div className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        <div className="tile tile-4 tile-position-1-2 tile-new">
          <div className="tile-inner">4</div>
        </div>
        <div className="tile tile-2 tile-position-1-3 tile-new">
          <div className="tile-inner">2</div>
        </div>
      </div>
    </div>
  );
}
