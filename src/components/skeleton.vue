<template>
  <div class="SevenTime-skeleton">
    <div class="SevenTime-main" v-for="(item, index) in itemNum" :key="index">
      <div class="SevenTime-up">
        <span class="up-left"></span>
        <span class="up-left"></span>
        <span class="up-right"></span>
      </div>
      <div class="SevenTime-down">
        <!-- <div class="down-left"></div> -->
        <div class="down-right">
          <div class="rightItem" v-for="(item, index) in 4" :key="index"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemNum: {
      type: Number,
      default: 4
    }
  }
};
</script>
<style lang="less" scoped>
// 闪动动画
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.animationActive {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
}
.SevenTime-skeleton {
  // height: 100%;
  width: 100%;
  z-index: 100;
  // position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  .SevenTime-main {
    margin-top: 24px;
    height: 292px;
    width: 100%;
    padding: 40px 40px 38px 40px;
    .SevenTime-up {
      display: flex;
      justify-content: space-between;
      .up-left {
        height: 33px;
        width: 200px;
        background-color: #fafafa;
        .animationActive;
      }
      .up-right {
        height: 33px;
        width: 50px;
        background-color: #fafafa;
        .animationActive;
      }
    }
    .SevenTime-down {
      margin-top: 19px;
      display: flex;
      justify-content: space-between;
      .down-left {
        width: 160px;
        height: 160px;
        margin-right: 24px;
        background-color: #fafafa;
        .animationActive;
      }
      .down-right {
        flex: 1;
        .rightItem {
          height: 30px;
          margin-bottom: 8px;
          background-color: #fafafa;
          .animationActive;
        }
      }
    }
  }
}
</style>
