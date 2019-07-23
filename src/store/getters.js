export default {
  getCounterNumber (state) {
    return state.counterNum !== '' ? state.counterNum : '0';
  }  
}
