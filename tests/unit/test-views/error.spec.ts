import { shallowMount } from "@vue/test-utils";
import Error from "@/views/Error.vue";

describe("Error.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Error);
  });

  it("should initialize", () => {
    expect(Error).toBeTruthy();
  });
});
