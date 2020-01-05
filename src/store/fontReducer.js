import { CHANGE_INPUT } from './FontStore';

export const fontReducer = (fontstate, {type, payload}) => {
  switch (type) {
    case CHANGE_INPUT:
      console.log(payload);
      return payload;
  
    default:
      return;
  }

}