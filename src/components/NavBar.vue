<template>
    <div class="main">
        <div class="topNavs">
        <cmp-mode></cmp-mode>
     <cmp-options></cmp-options>
   </div>
    </div>
</template>

<script>
import navMode from "./subComponents/navMode"
import options from "./subComponents/options"

export default {
    components:{
        cmpMode:navMode,
       cmpOptions:options
    }
   
}
</script>

<style lang='scss' scoped>
@import "../../public/css/navBar.scss";
</style>