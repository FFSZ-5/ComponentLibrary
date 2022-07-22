<!--
 * @FilePath: \ComponentLibrary\src\components\Collapse.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-22 11:06:53
 * @Description:
-->
<template>
  <div class="lf-collapse"
       :name="name">
    <div class="lf-collapse-head"
         @click="clickCollapse(false)">
      <slot name="head">
        <div class="lf-collapse-head-text">{{collapseValue.title}}</div>
      </slot>
    </div>
    <div class="lf-collapse-body">
      <div class="lf-collapse-body-artical"
           :class="{'unshow':!isShow}">
        <slot name="artical">
          <div class="artical-content">
            {{collapseValue.content}}
          </div>
        </slot>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'lfCollapse',
  props: {
    time: {
      default: 1
    },
    maxheight: {
      default: 100,
      type: [Number, String]
    },
    show: {
      default: false,
      type: Boolean
    },
    value: {
      default: () => { }
    },
    name: {
      default: 'demo1',
      required: true
    }
  },
  data () {
    return {
      isShow: false, // 是否展开
      collapseValue: { title: '123', content: '456' }// 折叠框的值
    }
  },
  watch: {
    show: {
      handler (val) {
        this.isShow = !val
        this.$nextTick(() => {
          this.clickCollapse(true)
        })
      },
      immediate: true
    },
    value: {
      handler (val) {
        this.collapseValue = Object.assign(this.collapseValue, val)
      },
      immediate: true
    }
  },
  methods: {
    clickCollapse (val) {
      if (!val) {
        this.$emit('change', { name: this.name, isActive: !this.isShow })
      }
      this.isShow = !this.isShow
      const _this = this
      const artical = document.querySelector('.lf-collapse[name="' + _this.name + '"] ' + '.lf-collapse-body-artical')
      console.log(_this.name)
      if (this.isShow) {
        const height = artical.scrollHeight
        requestAnimationFrame(function fn () {
          artical.style.transition = 'height ' + _this.time + 's'
          artical.style.height = '0px'
          artical.style.maxHeight = _this.maxheight + 'px'
          requestAnimationFrame(function fn () {
            artical.style.height = height + 'px'

            if (_this.maxheight < height) {
              artical.style.overflowY = 'auto'
            }
          })
        })
      } else {
        requestAnimationFrame(function fn () {
          artical.style.transition = 'height ' + _this.time + 's'
          requestAnimationFrame(function fn () {
            artical.style.height = '0px'
          })
        })
      }
    }
  }
}
</script>
