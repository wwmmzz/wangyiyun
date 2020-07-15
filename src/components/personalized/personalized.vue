<template>
<div>
    <h1>推荐歌单详情页</h1>
    <song-list v-for="item in list" :key="item.id" :song="item"></song-list>
</div>
</template>

<script>
import getData from "@/api/base";

import songList from '@/base/songlist'

export default {
    data(){
        return{
            list: []
        }
    },
    mounted(){
        this.getPlaylist()
    },
  methods: {
    getPlaylist() {
      getData.playlist({
          id: this.$route.query.id
        })
        .then(res => {
            this.list = res.data.playlist.tracks
          console.log(res);
        });
    }
  },
  components:{
      songList
  }
};
</script>

<style>
</style>