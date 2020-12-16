// 获取最近的“滚动祖先”
function getLatestScrollEle(el) {
  if (el.parentNode === null) {
    return el;
  } else if (hasScroll(el.parentNode)) {
    return el.parentNode;
  } else {
    return getLatestScrollEle(el.parentNode);
  }
}

function hasScroll(el) {
  return el.scrollHeight - el.clientHeight > 1;
}

function getScroll(target) {
  let ret = target.pageYOffset;
  if (typeof ret !== "number") {
    ret = target.scrollTop;
  }
  return ret;
}

const sticky = {
  inserted(el, binding) {
    const params = binding.value || {};
    const zIndex = params.zIndex || 1000;
    const elStyle = el.style;

    elStyle.position = "sticky";
    if (elStyle.position === "sticky") {
      elStyle.top = params.top || 0;
      elStyle.zIndex = zIndex;
    } else {
      const rect = el.getBoundingClientRect();
      const elHeight = rect.height;
      const elWidth = rect.width;

      const parentElm = getLatestScrollEle(el);
      const stickyTop = params.top || parentElm.getBoundingClientRect().top;

      let stickyed = false;

      const sticky = () => {
        if (stickyed) {
          return;
        }

        if (!elStyle.height) {
          elStyle.height = `${el.offsetHeight}px`;
        }

        elStyle.position = "fixed";
        elStyle.width = `${elWidth}px`;
        elStyle.top = `${stickyTop}px`;
        elStyle.zIndex = zIndex;
        stickyed = true;
      };

      const reset = () => {
        elStyle.position = "";
        elStyle.top = "";
        elStyle.zIndex = "";
        stickyed = false;
      };

      const check = () => {
        const scrollTop = getScroll(parentElm);
        if (scrollTop > stickyTop - elHeight) {
          sticky();
        } else {
          reset();
        }
      };

      parentElm.addEventListener("scroll", check);
    }
  }
};

export default sticky;
