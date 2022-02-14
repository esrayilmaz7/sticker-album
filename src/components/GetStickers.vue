<template>
  <div class="get-sticker">
    <button type="button" class="get-sticker__button" @click="showModal()">
      Get your daily stickers
    </button>
    <button type="button" class="get-sticker__button" @click="resetStickers()">
      Reset Stickers
    </button>
    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:body>
        <template v-if="!isStickerSetsOpened">
          <div class="sticker-sets__title" v-if="remainedStickerSets === 0">
            <h3>You finished the daily stickers. Try again tomorrow!</h3>
            <button class="sticker-sets__close-button" @click="closeModal()">
              Close
            </button>
          </div>
          <div class="sticker-sets__title" v-if="remainedStickerSets !== 0">
            <h3>Daily Sticker Set</h3>
            <p>You have {{ remainedStickerSets }} sticker sets to open</p>
          </div>
          <div class="sticker-sets">
            <StickerSet
              @openStickerSet="openStickerSet()"
              v-for="n in remainedStickerSets"
              :key="n"
            />
          </div>
        </template>
        <template v-if="isStickerSetsOpened">
          <p v-if="notFamiliarEmployees.length === 0">
            Now, you are familiar with all employees :)
          </p>
          <EmployeeList v-bind:teamMembers="notFamiliarEmployees" />
          <div class="sticker-sets__footer">
            <button
              class="sticker-sets__close-button"
              @click="pasteStickersToAlbum()"
            >
              Paste to your album
            </button>
          </div>
        </template>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Modal from "./Modal.vue";
import StickerSet from "./StickerSet.vue";
import EmployeeList from "./EmployeeList.vue";
import ScrumTeamsService from "../services/scrumTeamsService";

@Component({
  components: {
    Modal,
    StickerSet,
    EmployeeList,
  },
  data() {
    return {
      isModalVisible: false,
      isStickerSetsOpened: false,
      notFamiliarEmployees: [],
      scrumTeamsService: new ScrumTeamsService(),
      remainedStickerSets: this.$store.getters.getRemainedStickerSets,
    };
  },
  methods: {
    showModal() {
      this.$data.isModalVisible = true;
    },
    closeModal() {
      this.$data.isModalVisible = false;
    },
    pasteStickersToAlbum() {
      this.$data.isModalVisible = false;
      const employeeIds = this.$data.notFamiliarEmployees.map((e) => e.id);
      const currentScrumTeams = this.$store.getters.getScrumTeams;
      const newScrumTeams = this.$data.scrumTeamsService.updateScrumTeams(
        currentScrumTeams,
        employeeIds
      );
      this.$store.dispatch("updateScrumTeams", newScrumTeams);
      this.$data.isStickerSetsOpened = false;
    },
    openStickerSet() {
      this.$data.notFamiliarEmployees =
        this.$data.scrumTeamsService.getRandomEmployees(
          this.$store.getters.getScrumTeams
        );
      this.$data.remainedStickerSets = this.$data.remainedStickerSets - 1;
      this.$store.dispatch(
        "updateRemainedStickerSets",
        this.$data.remainedStickerSets
      );
      this.$data.isStickerSetsOpened = true;
    },
    resetStickers() {
      const scrumTeams = this.$data.scrumTeamsService.getInitialScrumTeams();
      this.$store.dispatch("updateScrumTeams", scrumTeams);
      this.$store.dispatch("updateRemainedStickerSets", 3);
    },
  },
})
export default class GetStickers extends Vue {}
</script>

<style lang="scss">
@import "src/assets/scss/get-stickers.scss";
</style>
