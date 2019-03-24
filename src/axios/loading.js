import Vue from 'vue';
import { LoadingPlugin, AlertPlugin } from 'vux';

Vue.use(AlertPlugin);
Vue.use(LoadingPlugin);

let needLoadingRequestCount = 0;

function startLoading() {
  Vue.$vux.loading.show({
    text: '加载中'
  });
}

function endLoading() {
  Vue.$vux.loading.hide();
}

export function showAlert({ title = '提示', content = null }) {
  Vue.$vux.alert.show({
    title: title,
    content: content,
  });
}

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}