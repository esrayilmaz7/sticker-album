<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div>
          <header class="modal-header">
            <slot name="header"> </slot>
          </header>

          <section class="modal-body">
            <slot name="body"></slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer"> </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Modal",
})
export default class Modal extends Vue {}
</script>

<style lang="scss">
@import "src/assets/scss/modal.scss";
</style>
