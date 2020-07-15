import axios from 'axios'

let http = axios.create()

let baseUrl = 'http://localhost:3000'

let getData = {}

getData.recommend = (params)=>{
    return http.get(`${baseUrl}/personalized`,{
        params
    })
}

getData.newsong = (params)=>{
    return http.get(`${baseUrl}/personalized/newsong`,{
        params
    })
}

getData.rank = (params)=>{
    return http.get(`${baseUrl}/top/list`,{
        params
    })
}

getData.playlist = (params)=>{
    return http.get(`${baseUrl}/playlist/detail`,{
        params
    })
}

getData.music = (params)=>{
    return http.get(`${baseUrl}/song/url`,{
        params
    })
}

getData.search = (params)=>{
    return http.get(`${baseUrl}/search`,{
        params
    })
}

getData.hotsearch = (params)=>{
    return http.get(`${baseUrl}/search/hot`,{
        params
    })
}

getData.searchsuggest = (params)=>{
    return http.get(`${baseUrl}/search/suggest`,{
        params
    })
}

export default getData