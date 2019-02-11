import Vue from "vue";
// 引用vuex
import Vuex from "vuex";
Vue.use(Vuex);

const state:any = {
    isShowPlayer: "666666", // 是否显示 player
    song: {}, // 歌的信息
    artist: "", // 歌的作者
    isPlay: false, // 是否播放
    unshow:false,
    show:false,

};
export default new Vuex.Store({
    state
});
