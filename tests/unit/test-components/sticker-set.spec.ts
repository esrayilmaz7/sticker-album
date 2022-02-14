import { createLocalVue, shallowMount } from "@vue/test-utils";
import StickerSet from "@/components/StickerSet.vue";

describe("StickerSet.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(StickerSet, {
      localVue,
    });
  });

  it("should initialize", () => {
    expect(StickerSet).toBeTruthy();
  });

  it("should emit 'openStickerSet' when #openStickerSet call", () => {
    wrapper.vm.openStickerSet();
    expect(wrapper.vm.$emit("openStickerSet"));
  });
});
