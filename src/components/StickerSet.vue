<template>
  <div class="sticker-set">
    <div class="sticker-set__card">
      <img
        class="sticker-set__logo"
        src="../assets/images/trendyol-tech-logo.png"
      />
      <p>STICKER SET</p>
    </div>
    <button
      type="button"
      class="sticker-set__button"
      v-on:click="openStickerSet()"
    >
      open
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  methods: {
    openStickerSet() {
      this.$emit("openStickerSet");
    },
  },
})
export default class StickerSet extends Vue {}
</script>
<style lang="scss">
@import "src/assets/scss/sticker-set.scss";
</style>
