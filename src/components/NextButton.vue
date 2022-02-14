<template>
  <div class="next-button">
    <button type="button" v-on:click="directToNextPage()">
      <img src="../assets/images/arrow-next.png" />
    </button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";

@Component({
  methods: {
    directToNextPage() {
      const pageNumber = this.$route.params.id
        ? parseInt(this.$route.params.id) + 1
        : 1;
      router.push({
        name: "ScrumTeam",
        params: { id: pageNumber.toString() },
      });
    },
  },
})
export default class NextButton extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/next-button.scss";
.next-button button:hover img {
  background-image: url("../assets/images/arrow-next-hover.png");
}
</style>
