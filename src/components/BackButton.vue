<template>
  <div class="back-button">
    <button type="button" v-on:click="directToBackPage()">
      <img src="../assets/images/arrow-prev.png" />
    </button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";

@Component({
  methods: {
    directToBackPage() {
      const pageNumber = parseInt(this.$route.params.id) - 1;
      if (pageNumber !== -1) {
        pageNumber === 0
          ? router.push({ name: "CoverPage" })
          : router.push({
              name: "ScrumTeam",
              params: { id: pageNumber.toString() },
            });
      }
    },
  },
})
export default class BackButton extends Vue {}
</script>

<style lang="scss">
@import "src/assets/scss/back-button.scss";
.back-button button:hover img {
  background-image: url("../assets/images/arrow-prev-hover.png");
}
</style>
