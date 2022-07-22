<!--
 * @FilePath: \ComponentLibrary\src\components\Button.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-21 15:33:27
 * @Description:
-->
<template>
  <div class="lf-button"
       @click="buttonClick">
    <span class="lf-loading"
          v-if="showLoading">
      <svg focusable="false"
           class="anticon-spin"
           data-icon="loading"
           width="1em"
           height="1em"
           fill="currentColor"
           aria-hidden="true"
           viewBox="0 0 1024 1024">
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lfButton',
  props: ['background', 'color', 'shadow', 'hoverbackgroundcolor', 'hoverfontcolor', 'loading'],
  mounted () {
    if (typeof this.loading !== 'undefined') {
      this.showLoading = typeof this.loading === 'string' ? this.loading === 'true' : this.loading
    }
    if (this.background) {
      this.$el.style.setProperty('--primary-button-background-color', this.background)
    }
    if (this.color) {
      this.$el.style.setProperty('--primary-button-font-color', this.color)
    }
    if (this.shadow) {
      this.$el.style.setProperty('--primary-button-shadow', this.shadow)
    }
    if (this.hoverbackgroundcolor) {
      this.$el.style.setProperty('--primary-button-hover-color', this.hoverbackgroundcolor)
    }
    if (this.hoverfontcolor) {
      this.$el.style.setProperty('--primary-button-hover-font-color', this.hoverfontcolor)
    }
  },
  data () {
    return {
      showLoading: false
    }
  },
  methods: {
    buttonClick () {
      this.$emit('click')
    }
  }
}
</script>
