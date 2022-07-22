<!--
 * @FilePath: \ComponentLibrary\src\App.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-22 10:54:09
 * @Description:
-->
<template>
  <div id="app">
    <div class="test">
      <!-- <lf-button background=red
                 color=green
                 hoverbackgroundcolor=pink
                 shadow=lightgreen
                 loading=true
                 @click="click">88888888</lf-button> -->
      <lf-button loading=true
                 @click="click">进入</lf-button>
      <div style="width:500px">
        <lf-code-box name="button"
                     active=false></lf-code-box>
      </div>

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
      text: 123
    }
  },
  methods: {
    change (val) {
      console.log(val)
    },
    click () {
      this.text = 'wd'
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
