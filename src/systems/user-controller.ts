// import { Engine } from 'excalibur';
import { GameObject } from '../game-objects/game-object';
import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, FourDirections } from '../helpers/consts';
import { GreenLock } from '../game-objects/green-lock';
import { BlueLock } from '../game-objects/blue-lock';

export class UserController {
  gameObject: GameObject;

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  requestMovement(direction: FourDirections) {
    //Attempt to start moving
    if (this.gameObject.isMoving()) {
      return;
    }

    // Check for lock at next position
    const possibleLock = this.gameObject.getLockAtNextPosition(direction);
    // Meh this is getting messy
    if (possibleLock && (possibleLock instanceof GreenLock || possibleLock instanceof BlueLock)) {
      possibleLock.unlock();
      return;
    }

    //Make sure the next space is available
    if (this.gameObject.isSolidAtNextPosition(direction)) {
      return;
    }

    // // Maybe hop out of non-normal skin
    // if (this.skin === BODY_SKINS.WATER) {
    //   const collision = this.getCollisionAtNextPosition(direction);
    //   if (!collision.withChangesHeroSkin()) {
    //     this.skin = BODY_SKINS.NORMAL;
    //   }
    // }

    // Start the move
    this.gameObject.startMoving(direction);
  }

  update(): void {
    const directions: FourDirections[] = [
      DIRECTION_LEFT, 
      DIRECTION_RIGHT, 
      DIRECTION_UP, 
      DIRECTION_DOWN
    ];
    const randomDirection: FourDirections = directions[Math.floor(Math.random() * directions.length)];
    this.requestMovement(randomDirection);
  }
}
