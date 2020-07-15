<template>
<div>
  <h1>播放页面</h1>
      <audio :src="song.url" controls autoplay></audio>
</div>

</template>

<script>
import getData from '@/api/base'

export default {
    data(){
        return{
            song: []
        }
    },
    mounted(){
        this.play()
    },
    methods:{
        play(){
            getData.music({
                id: this.$route.query.id
            })
            .then(res=>{
                if(res.data.code == 200){
                this.song = res.data.data[0]
                console.log('song', this.song)

                }
            })
        }
    }
}
</script>

<style>

</style>