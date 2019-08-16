<template>
  <div class="app">
    <nav-bar></nav-bar>

    <div class="rendered">
      <div class="feed">
        <cmp-feed></cmp-feed>
      </div>
      <div class="sideBar">
        
      </div>
    </div>
  </div>
</template>


  <script>
import feed from "./views/feed.vue";
import nav from "./components/NavBar";
export default {
  components: {
    navBar: nav,
    cmpFeed: feed
  }
};
</script>

   <style lang="scss" scoped src="../public/css/main.scss">
</style>


  