<!--
 * @FilePath: \ComponentLibrary\src\App.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-15 17:53:08
 * @Description:
-->
<template>
  <div id="app">
    <div class="test">
      <collapse style="margin-bottom:10px"
                v-for="i in 2"
                :key="i"
                v-model="test"
                :show=true
                time=0.1
                :name='i'
                @change="change">
        <!-- <template slot="head">
          <div style="height:100%;width:100%;border-left:1px solid #999;padding:5px 20px;">
            11111
          </div>
        </template> -->
        <!-- <template slot="artical">
          <div>123sadddddddddddddddwwadwwwwwwwwww</div>
          <div>123</div>
          <div>123</div>
        </template> -->
      </collapse>
    </div>

    <router-view />

  </div>
</template>
<script>
import Collapse from '@/components/Collapse.vue'
export default {
  components: { Collapse },
  data () {
    return {
      test: {
        title: 'a'
      }
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  height: 300px;
  width: 300px;
  margin: 500px auto;
}
</style>
