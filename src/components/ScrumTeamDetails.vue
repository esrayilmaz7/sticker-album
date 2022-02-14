<template>
  <div class="scrum-team-details">
    <img v-bind:src="teamInformation.logo" />
    <div>
      <p>{{ teamInformation.teamName }}</p>
      <p>{{ teamInformation.slogan }}</p>
      <p>{{ teamInformation.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["teamInformation"],
})
export default class ScrumTeamDetails extends Vue {}
</script>

<style scoped lang="scss">
@import "src/assets/scss/scrum-team-details.scss";
</style>
