<template>
  <div class="Gaojing">
    <div>
      <video ref="video" id="video" width="480" height="320" controls></video>
      <div>
        <button ref="capture" id="capture" @click="takePhoto">拍照</button>
      </div>
      <canvas ref="canvas" id="canvas" width="480" height="320"></canvas>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import qs from "qs"; //引用qs，下方axios方法里，才能在使用qs.stringify（）；

@Component
export default class cameraClass extends Vue {
  video: any;
  canvas: any;
  context: any;

  mounted() {
    this.video = this.$refs.video;

    this.canvas = this.$refs.canvas;

    this.context = this.canvas.getContext("2d");

    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia) {
      //调用用户媒体设备, 访问摄像头
      this.getUserMedia(
        { video: { width: 480, height: 320 } },
        this.success,
        this.error
      );
    } else {
      alert("不支持访问用户媒体");
    }
  }

  getUserMedia(constraints, success, error): void {
    if (navigator.mediaDevices.getUserMedia) {
      //最新的标准API
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(success)
        .catch(error);
    } else if (navigator.getUserMedia) {
      //旧版API
      navigator.getUserMedia(constraints, success, error);
    }
  }

  success(stream): void {
    //兼容webkit核心浏览器
    let CompatibleURL = window.URL;
    //将视频流设置为video元素的源
    console.log(stream);

    //video.src = CompatibleURL.createObjectURL(stream);
    this.video.srcObject = stream;
    this.video.play();
  }
  error(error): void {
    console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
  }
  takePhoto(): void {
    this.context.drawImage(this.video, 0, 0, 480, 320);
  }
}
</script>

<style lang="less" scope="scope">
//   @import '../../style/public.less';

.Gaojing {
  width: 100%;
}
</style>