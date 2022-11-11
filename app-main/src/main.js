import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
import { initGlobalState} from 'qiankun';
createApp(App).mount('#app')
let state = {
  propsMsg: '这是通过initGlobalState要传给子应用的数据'
}
// 初始化 state
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);// 传
actions.offGlobalStateChange();
registerMicroApps([
  {
    name: 'app-child1',
    entry: '//localhost:3003', // 刚刚设置的端口号
    container: '#App1', // 挂在地，所在主应用的元素id
    activeRule: '/app-one',
    props: {
      propsData: '你是应用1嘛'
    }
  },
  {
    name: 'App2',
    entry: '//localhost:3002',// 刚刚设置的端口号
    container: '#App2',
    activeRule: '/app-two',
  },
]);
// 启动 qiankun
start();