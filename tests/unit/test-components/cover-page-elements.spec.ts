import { shallowMount } from "@vue/test-utils";
import CoverPageElements from "@/components/CoverPageElements.vue";

jest.mock("@/components/GetStickers.vue", () => {
  return {
    default: jest.fn(),
  };
});
describe("CoverPageElements.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CoverPageElements);
  });

  it("should initialize", () => {
    expect(CoverPageElements).toBeTruthy();
  });
});
