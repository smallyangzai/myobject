<template>
  <div id="app">
      <router-view></router-view>
      <TabBar/>
  </div>
</template>

<script>
import TabBar from "@common/tabbar/TabBar"
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>

<style>
</style>
