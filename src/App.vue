<template>
<div class="app">
<nav-bar></nav-bar>
<router-view/>
</div>
</template>


  <script>
  import nav from "./components/NavBar"
    export default{
components:{
  navBar:nav
}
    }

    </script>


  