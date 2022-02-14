import { createLocalVue, shallowMount } from "@vue/test-utils";
import NextButton from "@/components/NextButton.vue";
import router from "@/router";

jest.mock("@/router", () => {
  return {
    push: jest.fn(),
  };
});
describe("NextButton.vue", () => {
  let wrapper;
  const localVue = createLocalVue();

  it("should initialize", () => {
    wrapper = shallowMount(NextButton, {
      localVue,
    });
    expect(NextButton).toBeTruthy();
  });

  it("should navigate the next scrum team page when #directToNextPage() is called", () => {
    wrapper = shallowMount(NextButton, {
      localVue,
      mocks: {
        $route: { params: { id: 3 } },
      },
    });
    wrapper.vm.directToNextPage();
    expect(router.push).toHaveBeenCalledWith({
      name: "ScrumTeam",
      params: { id: "4" },
    });
  });

  it("should navigate first scrum team if current path is CoverPage when #directToNextPage() is called", () => {
    wrapper = shallowMount(NextButton, {
      localVue,
      mocks: {
        $route: { params: { id: null } },
      },
    });
    wrapper.vm.directToNextPage();
    expect(router.push).toHaveBeenCalledWith({
      name: "ScrumTeam",
      params: { id: "1" },
    });
  });
});
