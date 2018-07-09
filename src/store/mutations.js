export default {
  // 参数1：state 其余为外部传入的参数
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
