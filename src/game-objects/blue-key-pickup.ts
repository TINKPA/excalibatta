import { GameObject } from './game-object';
import { PLACEMENT_TYPE_KEY_BLUE } from '../helpers/consts';
import { TILES } from '../helpers/tiles';

export class BlueKeyPickup extends GameObject {
  onInitialize(): void {
    this.graphics.use(this.generateGraphic(TILES.BLUE_KEY));
  }

  addsItemToInventoryOnCollide(): string {
    return PLACEMENT_TYPE_KEY_BLUE;
  }
}
