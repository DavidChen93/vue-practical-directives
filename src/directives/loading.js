function createMask() {
  const ele = document.createElement("div");
  ele.style.position = "absolute";
  ele.style.top = 0;
  ele.style.right = 0;
  ele.style.bottom = 0;
  ele.style.left = 0;
  ele.style.zIndex = 9999;
  ele.style.display = "flex";
  ele.style.justifyContent = "center";
  ele.style.alignItems = "center";
  ele.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  ele.innerHTML = "加载中...";
  return ele;
}

const mask = createMask();
let mountedFlag = false;

function checkLoading(node, isLoading) {
  if (node) {
    if (isLoading) {
      node.style.position = "relative";
      node.appendChild(mask);
      mountedFlag = true;
    } else if (mountedFlag) {
      node.removeChild(mask);
      mountedFlag = false;
    }
  }
}

const loading = {
  inserted(el, { value }) {
    checkLoading(el, value);
  },
  update(el, { value }) {
    checkLoading(el, value);
  }
};

export default loading;
