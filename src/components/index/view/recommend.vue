<template>
  <div>
    <h1>推荐歌单</h1>
    <recomm-list v-for="item in recomm" :recom='item' :key="item.id"></recomm-list>
    <h1>最新音乐</h1>
    <song-list v-for="item in newsong" :key="item.id" :song="item.song"></song-list>
  </div>
</template>

<script>
// 导入组件
import recommList from "@/base/recommlist";
import songList from "@/base/songlist";
// 导入接口
import getData from "@/api/base"


export default {
  data(){
    return{
      recomm: [],
      newsong: []
    }
  },
  components: {
    recommList,
    songList
  },
  mounted(){
    this.getRecommend()
    this.getNewsong()
  },
  methods:{
    getRecommend(){
      getData.recommend({
        limit: 6
      })
      .then(res=>{
        if(res.data.code == 200){
          this.recomm = res.data.result
        }else{

        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getNewsong(){
      getData.newsong()
      .then(res=>{
        if(res.data.code == 200){
          this.newsong = res.data.result
        }
      })
    }
  }
};
</script>

<style>
</style>