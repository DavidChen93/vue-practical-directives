<template>
  <div>
    <button v-debounce:1000="handleTriggerClick" @click="handleClick">
      点击
    </button>
    <div>我点击了{{ clickCount }}次</div>
    <div>我触发了{{ triggerCount }}次</div>
  </div>
</template>

<script>
export default {
  name: "Debounce",

  data() {
    return {
      clickCount: 0,
      triggerCount: 0
    };
  },

  methods: {
    handleClick() {
      this.clickCount++;
    },
    handleTriggerClick() {
      this.triggerCount++;
    }
  }
};
</script>
