const ADD_ITEMNUM = 'ADD_ITEMNUM'
const BACK_ITEMNUM = 'BACK_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const CLICK_NUM2 = 'CLICK_NUM2'

export default {
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
    if (state.answerid.length >= state.itemNum && state.answerid.length > 0) {
      state.choosedNum2 = state.answerid[state.itemNum - 1]
    } else {
      state.choosedNum2 = null
    }
  },
  //返回上一题
  [BACK_ITEMNUM](state, num) {
    state.itemNum -= num;
    console.log("-->chossesNum:" + state.answerid.length + ":" + state.itemNum)
    if (state.answerid.length >= state.itemNum && state.answerid.length > 0) {
      state.choosedNum2 = state.answerid[state.itemNum - 1]
    } else {
      state.choosedNum2 = null
    }
    console.log("-->chossesNum:" + state.choosedNum2)

  },
// 记录当前的状态值
  [CLICK_NUM2](state, index) {
    state.choosedNum2 = index
  },
  //记录答案
  [REMBER_ANSWER](state, id) {
    // state.answerid.push(id);
    state.answerid[state.itemNum - 1] = id
    console.log("add:"+state.answerid)
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
    state.choosedNum2 = null;
  },
}
