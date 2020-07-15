<template>
  <div>
    <span @click.prevent="personalized">{{recom.name}}</span>
  </div>
</template>

<script>
export default {
    props:['recom'],
    mounted(){
        console.log(this.recom)
    },
  methods: {
    personalized(){
        this.$router.push({
            path:'/personalized',
            query: {id:this.recom.id}
            })
    }
  }
};
</script>

<style>
</style>