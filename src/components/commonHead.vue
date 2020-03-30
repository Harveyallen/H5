<template>
  <div class="commonHead">
    <span class="icoLeft">
      <img
        v-if="rowInfo.icoLeft === 1"
        src="../assets/img/ico_zcdl_guanbi_nomal@2x.png"
        alt=""
        class="map_ico_back"
        @click="goPrevpage"
      />
      <img
        v-else-if="rowInfo.icoLeft === 2"
        src="../assets/img/ico_xqy_fh_normal@2x.png"
        alt=""
        class="ico_back"
        @click="goPrevpage"
      />
      <img
        v-else-if="rowInfo.icoLeft === 3"
        src=""
        alt=""
        class="ico_back"
        @click="goPrevpage"
      />
      <span v-else class="icoNothing"></span>
    </span>
    <span class="iconCenter">
      <span class="pageTitle" v-if="rowInfo.icoCenter === 1"
        >{{ rowInfo.icoTilte }}
      </span>
      <span class="pageTitle" v-else></span>
    </span>
    <span class="icoRight">
      <img
        class="addIcon"
        v-if="rowInfo.icoRight === 1"
        src="../assets/img/ico_gd@2x.png"
        alt=""
      />

      <span class="icoNothing" v-else></span>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    //   透明头部组件接收父组件传值
    rowInfo: {
      iconType: Object,
      default: {
        icoLeft: 1,
        icoCenter: 1,
        icoTilte: "活动",
        icoRight: 1
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    goPrevpage() {
      console.log("返回上一页");
      this.$emit("goPrevpage");
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/commonHead.less";
</style>
