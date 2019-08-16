<template>
  <div class="app">
    <nav-bar></nav-bar>

    <div class="rendered">
      <div class="feed">
        <cmp-feed></cmp-feed>
      </div>
      <div class="sideBar">
<cmp-side-bar></cmp-side-bar>
      </div>
    </div>
  </div>
</template>


  <script>
import feed from "./views/feed.vue";
import nav from "./components/NavBar";
import sideBar from "./components/SideBar"
export default {
  components: {
    navBar: nav,
    cmpFeed: feed,
    cmpSideBar:sideBar
  }
};
</script>

   <style lang="scss" scoped src="../public/css/main.scss">
</style>


  