<template>
  <div>
    <h1>排行榜</h1>
    <song-list v-for="item in ranklist" :key="item.id" :song="item"></song-list>
  </div>
</template>

<script>
import songList from "@/base/songlist";

import getData from "@/api/base"

export default {
  data(){
    return{
      ranklist: []
    }
  },
  mounted(){
    this.getRank()
  },
  methods:{
    getRank(){
      getData.rank({
        idx:1
      })
      .then(res=>{
        if(res.data.code == 200){
          this.ranklist = res.data.playlist.tracks
        }
      })
    }
  },
  
  components: {
    songList
  }
};
</script>

<style>
</style>