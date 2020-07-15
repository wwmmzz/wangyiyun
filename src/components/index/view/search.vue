<template>
  <div>
    <input type="text" v-model="keyword"><button @click="search">搜索</button>
    <div v-if="suggest.length == 0 && result.length == 0">
    <li v-for="item in hotlist" :key="item.first">{{item.first}}</li>
    </div>
    <div v-if="!(result && !keyword)">
      <li v-for="item in suggest" :key="item.keyword">{{item.keyword}}</li>
    </div>
    <song-list v-for="item in result" :key="item.id" :song="item"></song-list>
  </div>
</template>

<script>
import getData from "@/api/base"
import songList from "@/base/songlist"

export default {
  data(){
    return{
      keyword: "",
      hotlist: [],
      suggest:[],
      result:[]
    }
  },
  mounted(){
    this.getHotserch()
  },
  watch:{
    keyword(a){
      if(a){
    this.getSuggest()

      }
    }
  },
  methods:{
    search(){
      getData.search({
        keywords: this.keyword
      })
      .then(res=>{
        if(res.data.code == 200){
          this.result = res.data.result.songs
          this.keyword = ''
        }
      })
    },
    getHotserch(){
      getData.hotsearch()
      .then(res=>{
        if(res.data.code == 200){
          this.hotlist = res.data.result.hots
          console.log('热搜', this.hotlist)
        }
      })
    },
    getSuggest(){
      getData.searchsuggest({
        keywords: this.keyword,
        type:'mobile'
      })
      .then(res=>{
        if(res.data.code == 200){
        this.suggest = res.data.result.allMatch

        }
      })
    }
  },
  components:{
    songList
  }
}
</script>

<style>

</style>