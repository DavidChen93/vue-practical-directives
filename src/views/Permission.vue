<template>
  <div class="wrapper">
    <div>
      <button @click="login('author')">作家登录</button>
      <button @click="login('administrator')">管理员登录</button>
      <button @click="login()">退出登录</button>
    </div>
    <div v-if="reloadFlag">
      <button v-permission="['author']" @click="handleSubmit">提交</button>
      <button v-permission="['author']" @click="handleEdit">编辑</button>
      <button v-permission="['administrator']" @click="handleDelete">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Permission',

  data() {
    return {
      reloadFlag: false // 模拟登录页面重载
    }
  },

  methods: {
    handleSubmit() {
      alert('提交')
    },
    handleEdit() {
      alert('编辑')
    },
    handleDelete() {
      alert('删除')
    },
    login(role) {
      this.reloadFlag = false
      if (role) {
        this.$store.commit('UPDATE_USER_ROLES', [role])
      } else {
        this.$store.commit('UPDATE_USER_ROLES', [])
      }
      this.$nextTick(() => {
        this.reloadFlag = true
      })
    }
  }
}
</script>

<style>
.wrapper {
  width: 500px;
  height: 500px;
  background-color: #c5c5c5;
}
</style>
