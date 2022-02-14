<template>
  <div class="employee-details">
    <div class="employee-details__photo">
      <img v-bind:src="member.isFamiliar ? member.photo : unknownPhotoUrl" />
    </div>
    <div class="employee-details__info">
      <p>{{ member.name }}</p>
      <p>{{ member.positionTitle }}</p>
      <p>{{ member.experienceTime }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["member"],
  data() {
    return {
      unknownPhotoUrl: require("../assets/images/unknown-user.png"),
    };
  },
})
export default class EmployeeDetails extends Vue {}
</script>

<style lang="scss">
@import "src/assets/scss/employee-details.scss";
</style>
