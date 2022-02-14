<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import ScrumTeamsService from "./services/scrumTeamsService";
export default {
  name: "App",
  created() {
    const scrumTeamsService = new ScrumTeamsService();
    const scrumTeams = scrumTeamsService.getInitialScrumTeams();
    this.$store.dispatch("updateScrumTeams", scrumTeams);
    this.$store.dispatch("updateRemainedStickerSets", 3);
  },
};
</script>

<style></style>
