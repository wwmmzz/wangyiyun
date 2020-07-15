<template>
  <div>
    <span @click="recommend">推荐音乐</span>
    <span @click="rank">热歌榜</span>
    <span @click="search">搜索</span>
  </div>
</template>

<script>
export default {
    mounted(){
       
    },
    methods:{
        recommend(){
            this.$router.push('recommend')
            console.log(this.$router)
        },
        rank(){
            this.$router.push('rank')
            console.log(this.$router)
        },
        search(){
            this.$router.push('search')
            console.log(this.$router)
        },
    }
};
</script>

<style>
</style>