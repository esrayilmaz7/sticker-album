import { createLocalVue, shallowMount } from "@vue/test-utils";
import ScrumTeam from "@/views/ScrumTeam.vue";
import router from "@/router";

jest.mock("@/components/GetStickers.vue", () => {
  return {
    default: jest.fn(),
  };
});
jest.mock("@/router", () => {
  return {
    push: jest.fn(),
  };
});
const mockScrumTeams = {
  "1": {
    teamInformation: {
      teamName: "Web Team",
      logo: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Avatar-team-avatar.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
      slogan: "Best team web team",
      description: "aşırı iyi bir takımızdır",
    },
    members: [
      {
        id: 1,
        name: "Aang",
        photo:
          "https://playtusu.com/wp-content/uploads/2021/11/avatar-the-last-airbender.jpg",
        positionTitle: "Junior Frontend Developer",
        experienceTime: 2,
        isFamiliar: false,
      },
    ],
  },
  "2": {
    teamInformation: {
      teamName: "Web Team",
      logo: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Avatar-team-avatar.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
      slogan: "Best team web team",
      description: "aşırı iyi bir takımızdır",
    },
    members: [
      {
        id: 1,
        name: "Aang",
        photo:
          "https://playtusu.com/wp-content/uploads/2021/11/avatar-the-last-airbender.jpg",
        positionTitle: "Junior Frontend Developer",
        experienceTime: 2,
        isFamiliar: false,
      },
    ],
  },
};
describe("ScrumTeam.vue", () => {
  let wrapper;
  const localVue = createLocalVue();

  beforeEach(() => {
    wrapper = shallowMount(ScrumTeam, {
      localVue,
      mocks: {
        $route: { params: { id: 1 } },
        $store: { getters: { getScrumTeams: mockScrumTeams } },
      },
    });
  });

  it("should initialize", () => {
    expect(ScrumTeam).toBeTruthy();
  });

  it("should create the data correctly", () => {
    expect(wrapper.vm.scrumTeams).toBe(mockScrumTeams);
    expect(wrapper.vm.currentScrumTeam).toBe(mockScrumTeams[1]);
    expect(wrapper.vm.maxPageNumber).toBe(Object.keys(mockScrumTeams).length);
  });

  it("should change data when the route is changed", async () => {
    router.push("/2");

    setTimeout(() => {
      expect(wrapper.vm.currentScrumTeam).toBe(mockScrumTeams[2]);
      expect(wrapper.vm.showNextButton).toBe(false);
    }, 0);
  });
});
