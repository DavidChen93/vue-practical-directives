import store from "@/store";

function getUserRoles() {
  // 此处实现用户权限获取的逻辑，一般放在vuex中
  return store.getters.userRoles;
}

function checkPermission(value) {
  // 获取用户角色权限列表
  const roles = getUserRoles();

  // 指令值为数组，表示那些角色有权限，形如：['administrator', 'author', 'visitor']
  if (value && value instanceof Array && value.length > 0) {
    // 判断用户是否拥有该角色
    return roles.some(role => {
      return value.includes(role);
    });
  }
  return false;
}

const permission = {
  inserted(el, binding) {
    const hasPermission = checkPermission(binding.value);
    // 无权限则移除元素
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
};

export default permission;
