# vue-leancloud

自制vue插件提供对LeanCloud的支持

用法:

npm install leancloud-storage --save //安装leancloud

vue-leancloud.js:

设置您的LeanCloud APP_ID & APP_KEY

main.js:

import leancloud from './vue-leancloud' //引入本文件

Vue.use(leancloud) //使用本插件

Vue子组件:

使用this.$AV调用leancloud
