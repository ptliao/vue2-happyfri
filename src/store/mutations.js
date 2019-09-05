const ADD_ITEMNUM = 'ADD_ITEMNUM'
const BACK_ITEMNUM = 'BACK_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  //返回上一题
  [BACK_ITEMNUM](state, num) {
    state.itemNum -= num;
    state.choosedNum = state.answerid[state.itemNum]
  },
  //记录答案
  [REMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },
  /*
  记录做题时间
   */
  [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000)
  },
  /*
  初始化信息，
   */
  [INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  },
}
