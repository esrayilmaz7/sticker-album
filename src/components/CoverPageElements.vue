<template>
  <div class="cover-page-elements">
    <div class="cover-page-elements__roof">
      <img
        class="cover-page-elements__logo"
        src="../assets/images/trendyol-tech-logo.png"
      />
      <h1 class="cover-page-elements__title">STICKER ALBUM</h1>
      <img
        class="cover-page-elements__line"
        src="../assets/images/line-blue.png"
      />
      <GetStickers />
    </div>
    <NextButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GetStickers from "./GetStickers.vue";
import NextButton from "./NextButton.vue";

@Component({
  components: {
    NextButton,
    GetStickers,
  },
})
export default class CoverPageElements extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/cover-page-elements.scss";
</style>
