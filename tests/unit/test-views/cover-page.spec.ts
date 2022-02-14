import { shallowMount } from "@vue/test-utils";
import CoverPage from "@/views/CoverPage.vue";

jest.mock("@/components/GetStickers.vue", () => {
  return {
    default: jest.fn(),
  };
});
describe("CoverPage.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CoverPage);
  });

  it("should initialize", () => {
    expect(CoverPage).toBeTruthy();
  });
});
