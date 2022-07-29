<!--
 * @FilePath: \ComponentLibrary\src\App.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 16:12:03
 * @Description:
-->
<template>
  <div id="app">
    <div class="test">
      <div style="width:500px">
        <lf-code-box name="button"
                     :active=true></lf-code-box>
      </div>
      <lf-collapse name="123"
                   :show="isShow"
                   maxheight="100"
                   @click="click2">
        <template #head>
          <div class="a">
            1
          </div>
          <div class="b">
            2
          </div>
          <div class="c">
            3
          </div>
        </template>
        <template slot="artical">
          <div>12</div>
          <div>12</div>
          <div>12</div>
          <div>12</div>
          <div>12</div>
          <div>82</div>
          <div>82</div>
          <div>82</div>
          <div>82</div>
          <div>82</div>
        </template>
      </lf-collapse>
    </div>

    <router-view />

  </div>
</template>
<script>
export default {
  data () {
    return {
      test: {
        title: 'a'
      },
      text: 123,
      isShow: true
    }
  },
  methods: {
    change (val) {
      console.log(val)
    },
    click2 (val) {
      console.log(val.target)
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="scss" scoped>
// .test {
//   height: 300px;
//   width: 300px;
//   margin: 500px auto;
// }
</style>
