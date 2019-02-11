<template>
  <div class="Gaojing">
    <el-tree :props="props1" :load="loadNode1" lazy></el-tree>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import qs from "qs"; //引用qs，下方axios方法里，才能在使用qs.stringify（）；
// import {ClassTree} from "../PublicMethod/Axios";
interface ItreeData {
  label: string;
  children: string;
  isLeaf: string;
}
@Component
export default class Mianbaoxie extends Vue {
  props1: ItreeData = {
    label: "name",
    children: "zones",
    isLeaf: "leaf"
  };
  loadNode1(node, resolve) {
    let aa: any = this;
    if (node.level === 0) {
      aa.$ajax({
        method: "GET",
        url: "/test/people.json",
        ContentType: "application/json",
        data: {}
      })
        .then(function(res) {
          return resolve(res.data);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    if (node.level == 1) {
      if (node.data.name == "张三") {
        aa.$ajax({
          method: "GET",
          url: "/test/zhang3.json",
          ContentType: "application/json",
          data: {}
        })
          .then(function(res) {
            let NewArr = res.data.map(element => {
              return { name: element.日期, leaf: true };
            });
            return resolve(NewArr);
          })
          .catch(function(err) {
            console.log(err);
          });
      } else if (node.id == 2) {
        aa.$ajax({
          method: "GET",
          url: "/test/li4.json",
          ContentType: "application/json",
          data: {}
        })
          .then(function(res) {
            return resolve(res.data);
          })
          .catch(function(err) {
            console.log(err);
          });
      } else {
        aa.$ajax({
          method: "GET",
          url: "/test/wang5.json",
          ContentType: "application/json",
          data: {}
        })
          .then(function(res) {
            console.log(res);
            let NewArr = res.data.map(element => {
              console.log(element);
              return { name: element.日期, leaf: true };
            });
            return resolve(NewArr);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }

    // if()
  }
}
</script>

<style lang="less" scope="scope">
//   @import '../../style/public.less';

.Gaojing {
  width: 100%;
}
</style>