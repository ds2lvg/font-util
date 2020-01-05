import { CHANGE_INPUT, RESET_INPUT } from './store';

export const fontReducer = (fontstate, {type, target, payload}) => {
  switch (type) {
    case CHANGE_INPUT:
      console.log(fontstate);
      console.log(target, payload);
      if(target) {
        return {...fontstate, [target]: payload}
      } else{
        return payload;
      }

    case RESET_INPUT:
      return payload;

    default:
      return;
  }

}