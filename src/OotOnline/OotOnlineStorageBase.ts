import {
  SCENE_ARR_SIZE,
  EVENT_ARR_SIZE,
  ITEM_FLAG_ARR_SIZE,
  INF_ARR_SIZE,
  SKULLTULA_ARR_SIZE,
} from './OotOnline';
import { IKeySaveContainer, KeySaveContainer } from './data/OotoSaveData';

export class OotOnlineStorageBase {
  sceneStorage: Buffer = Buffer.alloc(SCENE_ARR_SIZE);
  eventStorage: Buffer = Buffer.alloc(EVENT_ARR_SIZE);
  itemFlagStorage: Buffer = Buffer.alloc(ITEM_FLAG_ARR_SIZE);
  infStorage: Buffer = Buffer.alloc(INF_ARR_SIZE);
  skulltulaStorage: Buffer = Buffer.alloc(SKULLTULA_ARR_SIZE);
  smallKeyStorage: IKeySaveContainer = new KeySaveContainer();
  playerModelCache: any = {};
}