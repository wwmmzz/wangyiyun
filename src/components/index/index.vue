<template>
  <div>
    <h1>主页</h1>
    <head-nav></head-nav>
    <router-view></router-view>
  </div>
</template>

<script>

import headNav from "@/base/nav";


export default {
    components:{
        headNav,
    }
  
};
</script>

<style>
</style>