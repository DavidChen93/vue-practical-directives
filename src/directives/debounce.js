const debounce = {
  inserted(el, { value, arg }) {
    const delay = +arg || 1000;
    let timer;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        value();
      }, delay);
    });
  }
};

export default debounce;
