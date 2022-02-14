<template>
  <div class="employee-list">
    <EmployeeDetails
      v-for="member in teamMembers"
      v-bind:key="member.id"
      v-bind:member="member"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmployeeDetails from "@/components/EmployeeDetails.vue";

@Component({
  components: {
    EmployeeDetails,
  },
  props: ["teamMembers"],
})
export default class EmployeeList extends Vue {}
</script>
<style lang="scss">
@import "src/assets/scss/employee-list.scss";
</style>
