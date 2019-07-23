export default {
  getCounterNumber (state) {
    return state.counterNum !== '' ? state.counterNum : '0';
  },
  getTotalNumber (state) {
    return state.totalNum;
  }  
}
