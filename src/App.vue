<template>
  <div id="app">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { routes } from "@/router";
export default {
  name: "App",

  data() {
    return {
      routes
    };
  }
};
</script>
<style>
#app {
  padding: 30px;
}
</style>
