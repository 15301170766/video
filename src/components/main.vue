<template>
  <div class="hello">
    <div class="button">
      <router-link to="/HelloWorld/camera"><el-button type="primary">路由A</el-button></router-link>
      <router-link to="/HelloWorld/tree"><el-button type="success">路由B</el-button></router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue" ;
import Component from "vue-class-component";
import { Loading } from "element-ui";
import { Title } from "../config/api";
import axios from "axios";

@Component
export default class Hello extends Vue {

}
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  // background: url(../assets/timg2.jpg) no-repeat;
  background-size: 100%;
}
.button{
  // background: red;
  text-align: center;
}
.main{
  // background: red;
  // height: 500px;
  // border: 2px solid green;
  margin: 20px;

}
</style>
