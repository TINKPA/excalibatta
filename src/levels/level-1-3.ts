import {
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_KEY_BLUE,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_LOCK_BLUE,
  PLACEMENT_TYPE_LOCK_GREEN,
  PLACEMENT_TYPE_KEY_GREEN,
} from '../helpers/consts';
import { LevelData } from './levels-map';

export const Level_1_3: LevelData = {
  id: 'level-1-3',
  theme: 'BLUE',
  timeAvailable: 99,
  tilesWidth: 12,
  tilesHeight: 3,
  placements: [
    {
      type: PLACEMENT_TYPE_HERO,
      x: 2,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_GOAL,
      x: 12,
      y: 3,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 4,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 4,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 6,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 7,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 8,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 9,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 9,
      y: 3,
    },
    {
      type: PLACEMENT_TYPE_KEY_GREEN,
      x: 1,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_KEY_BLUE,
      x: 8,
      y: 3,
    },
    {
      type: PLACEMENT_TYPE_FLOUR,
      x: 12,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_LOCK_BLUE,
      x: 5,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_LOCK_GREEN,
      x: 11,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 11,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 12,
      y: 2,
    },
  ],
};
