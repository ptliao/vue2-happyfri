import ajax from '../config/ajax'

export default {
  addNum({commit, state}, id) {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('REMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  },
  backNum({commit, state}) {
    if (state.itemNum > 0) {
      commit('BACK_ITEMNUM', 1)
    }
  },
  clickNum2({commit,state},index){
    commit('CLICK_NUM2',index)
  },

  //初始化信息
  initializeData({commit}) {
    commit('INITIALIZE_DATA');
  }
}
