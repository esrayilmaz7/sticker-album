import { createLocalVue, shallowMount } from "@vue/test-utils";
import BackButton from "@/components/BackButton.vue";
import router from "@/router";

jest.mock("@/router", () => {
  return {
    push: jest.fn(),
  };
});
describe("BackButton.vue", () => {
  let wrapper;
  const localVue = createLocalVue();

  it("should initialize", () => {
    wrapper = shallowMount(BackButton, {
      localVue,
    });
    expect(BackButton).toBeTruthy();
  });

  it("should navigate the previous scrum team page when #directToBackPage() is called", () => {
    wrapper = shallowMount(BackButton, {
      localVue,
      mocks: {
        $route: { params: { id: 3 } },
      },
    });
    wrapper.vm.directToBackPage();
    expect(router.push).toHaveBeenCalledWith({
      name: "ScrumTeam",
      params: { id: "2" },
    });
  });

  it("should navigate the cover page if current id is 1 when #directToBackPage() is called", () => {
    wrapper = shallowMount(BackButton, {
      localVue,
      mocks: {
        $route: { params: { id: 1 } },
      },
    });
    wrapper.vm.directToBackPage();
    expect(router.push).toHaveBeenCalledWith({
      name: "CoverPage",
    });
  });
});
