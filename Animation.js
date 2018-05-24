import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }
