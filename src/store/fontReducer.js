import { CHANGE_INPUT, RESET_INPUT, initialState } from './store';

export const fontReducer = (fontstate, {type, target, payload}) => {
  switch (type) {
    case CHANGE_INPUT:
      // console.log(target, payload);
      if(target) {
        return {...fontstate, [target]: payload}
      } else{
        return payload;
      }

    case RESET_INPUT:
      // console.log("RESET_INPUT", fontstate)
      return initialState;

    default:
      return;
  }

}