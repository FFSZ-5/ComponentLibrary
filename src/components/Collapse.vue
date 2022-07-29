<!--
 * @FilePath: \ComponentLibrary\src\components\Collapse.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 16:10:39
 * @Description:
-->
<template>
  <div class="lf-collapse"
       :name="name">
    <div class="lf-collapse-head"
         @click="clickCollapse($event,false)">
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
      default: 0.3,
      type: Number
    },
    maxheight: {
      default: '',
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
      collapseValue: { title: '123', content: '456' }, // 折叠框的值
      canUse: true // 点击是否可用
    }
  },
  watch: {
    show: {
      handler (val) {
        this.isShow = !val
        this.$nextTick(() => {
          this.clickCollapse(null, true)
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
    clickCollapse (ele, val) {
      if (!val) {
        this.$emit('click', { name: this.name, isActive: !this.isShow, target: ele.target })
        this.$emit('change', { name: this.name, isActive: !this.isShow })
        if (!this.canUse) {
          return
        }
      } else {
        this.canUse = false
      }

      this.isShow = !this.isShow
      const _this = this
      const artical = document.querySelector('.lf-collapse[name="' + _this.name + '"] ' + '.lf-collapse-body-artical')
      if (this.isShow) {
        const height = artical.scrollHeight
        requestAnimationFrame(function fn () {
          artical.style.transition = 'height ' + _this.time + 's'
          artical.style.height = '0px'
          if (_this.maxheight) {
            artical.style.maxHeight = _this.maxheight + 'px'
          }
          requestAnimationFrame(function fn () {
            artical.style.height = height + 'px'
            if (_this.maxheight) {
              if (_this.maxheight < height) {
                artical.style.overflowY = 'auto'
              }
            } else {
              artical.style.overflowY = 'hidden'
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
