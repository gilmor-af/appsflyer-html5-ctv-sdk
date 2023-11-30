import {Platform} from './utils/types.js';
import CustomPlatform from './custom.js';

class NativePC extends CustomPlatform {
  constructor(){
    super(Platform.NativePC);
  }
}

export default NativePC;