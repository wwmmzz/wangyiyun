<template>
  <div>
      <span @click="play">{{song.name}}</span>
  </div>
</template>

<script>
export default {
    props: ['song'],
    methods:{
        play(){
            this.$router.push({
                path:'/play',
                query:{
                    id: this.song.id
                }
                })
        }
    }
}
</script>

<style>

</style>