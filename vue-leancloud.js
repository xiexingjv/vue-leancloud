/**
 * Created by xxj on 2018/2/2.
 */
const AV = require('leancloud-storage')

var APP_ID = 'Your LeanCloud APP_ID'
var APP_KEY = 'Your LeanCloud APP_KEY'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

module.exports = {
  install: function(Vue) {
    Vue.prototype.$AV = AV
  }
}
