import { initialState, CHANGE_INPUT, RESET_INPUT, CHANGE_CHECKBOX, } from './store';

export const fontReducer = (fontstate=initialState, {type, target, payload}) => {
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

    case CHANGE_CHECKBOX:
      const fontEN = payload[0][0];
      const fontKR = payload[1];
      const isCheck = payload[2];
      const idx = payload[3];
      const {usingfontNames} = fontstate
      console.log("CHANGE_CHECKBOX", payload, fontEN, fontKR, isCheck, idx);
      let checkedfonts;
      if(!isCheck) {
        checkedfonts = usingfontNames.filter(v => {
          return (Object.keys(v)[0] === fontEN) ? false : true;
        })
      } else {
        // 기존방식: 새로 추가하면 뒤에가서 붙게 함
        checkedfonts = usingfontNames.concat({[fontEN]: fontKR});
        // checkedfonts = [
        //   ...usingfontNames.slice(0, idx+1),
        //   ...usingfontNames.slice(idx, usingfontNames.length+1),
        // ];
        // checkedfonts[idx] = {[fontEN]: fontKR}
      }

      console.log(checkedfonts)
      return {
        ...fontstate,
        [target]: checkedfonts,
      };

    default:
      return;
  }

}