import { useState } from 'react';

import { CELL_SIZE } from '../../helpers/consts';
import { ClockTickPayload, GAME_EVENTS } from '../../helpers/events';
import { PixelNumber } from '../pixel-number/pixel-number';
import { Sprite } from '../sprite/sprite';
import { TILES } from '../../helpers/tiles';
import { useGameEvent } from '../../hooks/use-game-event';

import styles from './clock-count.module.css';

export default function ClockCount() {
  const [secondsRemaining, setSecondsRemaining] = useState<number | string>('-');

  useGameEvent<ClockTickPayload>(GAME_EVENTS.CLOCK_TICK, (e) => {
    setSecondsRemaining(e.target.secondsRemaining);
  });

  return (
    <div className={styles.clockCount}>
      <Sprite frameCoord={TILES.CLOCK} size={CELL_SIZE} />
      {secondsRemaining !== null && <PixelNumber number={String(secondsRemaining)} />}
    </div>
  );
}
