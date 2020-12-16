import debounce from "./debounce";
import loading from "./loading";
import permission from "./permission";
import sticky from "./sticky";
import wave from "./wave";
import draggable from './draggable'

const directives = {
  debounce,
  loading,
  permission,
  sticky,
  wave,
  draggable
};

function install(Vue) {
  for (const [key, value] of Object.entries(directives)) {
    Vue.directive(key, value);
  }
}

export default {
  install
};
