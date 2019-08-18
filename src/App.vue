<template>
  <div class="app">
    
<cmp-nav></cmp-nav>
<cmp-side></cmp-side>
<div class="view">
  <router-view/>
</div>
  </div>
</template>


  <script>
import navBar from "./components/navBar"
import sideBar from "./components/sideBar"
export default {
  components: {
   cmpSide:sideBar,
cmpNav:navBar
  }
};
</script>

   <style lang="scss" scoped src="../public/css/main.scss">
</style>


  