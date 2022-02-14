<template>
  <div class="cover-page">
    <CoverPageElements />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoverPageElements from "@/components/CoverPageElements.vue";

@Component({
  components: {
    CoverPageElements,
  },
})
export default class CoverPage extends Vue {}
</script>
