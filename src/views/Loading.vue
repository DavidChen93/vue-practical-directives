<template>
  <div>
    <button @click="fetchData">请求数据</button>
    <div v-loading="loading" class="wrapper">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Loading",

  data() {
    return {
      text: "空空如也",
      loading: false
    };
  },

  methods: {
    fetchData() {
      // 模拟异步请求
      this.loading = true;
      setTimeout(() => {
        this.text = "嘿嘿，我有数据了";
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
