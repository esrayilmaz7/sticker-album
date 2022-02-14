<template>
  <div class="scrum-team">
    <BackButton />
    <div class="scrum-team__layout">
      <div class="scrum-team__header">
        <h3>{{ currentScrumTeam.teamInformation.teamName }}</h3>
      </div>
      <div class="scrum-team__body">
        <ScrumTeamDetails
          v-bind:teamInformation="currentScrumTeam.teamInformation"
        />
        <EmployeeList v-bind:teamMembers="currentScrumTeam.members" />
      </div>
    </div>
    <NextButton v-if="showNextButton" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmployeeList from "@/components/EmployeeList.vue";
import ScrumTeamDetails from "@/components/ScrumTeamDetails.vue";
import BackButton from "@/components/BackButton.vue";
import NextButton from "@/components/NextButton.vue";

@Component({
  components: {
    EmployeeList,
    ScrumTeamDetails,
    BackButton,
    NextButton,
  },
  data() {
    return {
      currentScrumTeam: undefined,
      scrumTeams: undefined,
      showNextButton: true,
      maxPageNumber: 0,
    };
  },
  watch: {
    $route(to, from) {
      const nextPageNumber = parseInt(to.params.id);
      this.$data.currentScrumTeam = this.$data.scrumTeams[nextPageNumber];
      this.$data.showNextButton = this.$data.maxPageNumber !== nextPageNumber;
    },
  },
  created() {
    this.$data.scrumTeams = this.$store.getters.getScrumTeams;
    this.$data.currentScrumTeam = this.$data.scrumTeams[this.$route.params.id];
    this.$data.maxPageNumber = Object.keys(this.$data.scrumTeams).length;
  },
})
export default class ScrumTeam extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/scrum-team.scss";
</style>
