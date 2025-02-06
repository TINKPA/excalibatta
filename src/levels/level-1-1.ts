import { PLACEMENT_TYPE_HERO, PLACEMENT_TYPE_GOAL, PLACEMENT_TYPE_WALL, PLACEMENT_TYPE_AGENT, PLACEMENT_TYPE_FLOUR, PLACEMENT_TYPE_GROUND_ENEMY } from '../helpers/consts';
import { LevelData } from './levels-map';

export const Level_1_1: LevelData = {
  id: 'level-1-1',
  theme: 'BLUE',
  timeAvailable: 99,
  tilesWidth: 16,
  tilesHeight: 16,
  placements: [
    {
      type: PLACEMENT_TYPE_AGENT,
      x: 2,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_HERO,
      x: 3,
      y: 3,
    },
    // {
    //   type: PLACEMENT_TYPE_HERO,
    //   x: 3,
    //   y: 3,
    // },
    // {
    //   type: PLACEMENT_TYPE_HERO,
    //   x: 3,
    //   y: 3,
    // },
    // {
    //   type: PLACEMENT_TYPE_HERO,
    //   x: 3,
    //   y: 3,
    // },
    // {
    //   type: PLACEMENT_TYPE_HERO,
    //   x: 3,
    //   y: 3,
    // },
    // {
    //   type: PLACEMENT_TYPE_GOAL,
    //   x: 8,
    //   y: 2,
    // },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 5,
      y: 2,
    },
    {
      type: PLACEMENT_TYPE_FLOUR,
      x: 3,
      y: 3,
    },
    {
      type: PLACEMENT_TYPE_FLOUR,
      x: 3,
      y: 7,
    },
    {
      type: PLACEMENT_TYPE_FLOUR,
      x: 7,
      y: 7,
    },
    {
      type: PLACEMENT_TYPE_FLOUR,
      x: 7,
      y: 3,
    },
    {
      type: PLACEMENT_TYPE_FLOUR,
      x: 5,
      y: 5,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 6,
      y: 5,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 4,
      y: 5,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 8,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 2,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 2,
      y: 9,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 8,
      y: 9,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 3,
      y: 5,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 7,
      y: 5,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 3,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 4,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 5,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 6,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 7,
      y: 1,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 3,
      y: 9,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 4,
      y: 9,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 5,
      y: 9,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 6,
      y: 9,
    },
    {
      type: PLACEMENT_TYPE_WALL,
      x: 7,
      y: 9,
    },
  ],
};
