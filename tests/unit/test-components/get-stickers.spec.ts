import { createLocalVue, shallowMount } from "@vue/test-utils";
import GetStickers from "@/components/GetStickers.vue";
import Vuex from "vuex";

jest.mock("@/services/scrumTeamsService", () => {
  let mockGetInitialScrumTeams = jest.fn(() => {
    return {
      mockScrumTeams,
    };
  });
  let mockGetRandomEmployees = jest.fn(() => {
    return {
      mockRandomEmployees,
    };
  });
  let mockUpdateScrumTeams = jest.fn(() => {
    return {
      mockScrumTeams,
    };
  });
  return {
    __esModule: true,
    default: jest.fn(() => ({
      getInitialScrumTeams: mockGetInitialScrumTeams,
      getRandomEmployees: mockGetRandomEmployees,
      updateScrumTeams: mockUpdateScrumTeams,
    })),
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
const mockRandomEmployees = [
  {
    id: 1,
    name: "Aang",
    photo:
      "https://playtusu.com/wp-content/uploads/2021/11/avatar-the-last-airbender.jpg",
    positionTitle: "Junior Frontend Developer",
    experienceTime: 2,
    isFamiliar: false,
  },
];
describe("GetStickers.vue", () => {
  let wrapper;
  const localVue = createLocalVue();

  const actions = {
    updateScrumTeams: jest.fn(),
    updateRemainedStickerSets: jest.fn(),
  };

  const getters = {
    getScrumTeams: jest.fn(() => {
      return mockScrumTeams;
    }),
    getRemainedStickerSets: jest.fn(() => {
      return 3;
    }),
  };

  beforeEach(() => {
    localVue.use(Vuex);
    const $store = new Vuex.Store({ actions, getters });

    wrapper = shallowMount(GetStickers, {
      localVue,
      mocks: {
        $route: { params: { id: 1 } },
        $store,
      },
    });
  });

  it("should initialize", () => {
    expect(GetStickers).toBeTruthy();
  });

  it("should open the modal when #showModal() is called", () => {
    wrapper.vm.showModal();
    expect(wrapper.vm.isModalVisible).toBe(true);
  });

  it("should close the modal when #closeModal() is called", () => {
    wrapper.vm.closeModal();
    expect(wrapper.vm.isModalVisible).toBe(false);
  });

  it("should change the state when #resetStickers() is called", () => {
    wrapper.vm.resetStickers();
    expect(
      wrapper.vm.scrumTeamsService.getInitialScrumTeams
    ).toHaveBeenCalled();
    expect(actions.updateScrumTeams).toHaveBeenCalled();
    expect(actions.updateRemainedStickerSets).toHaveBeenCalled();
  });

  it("should show sticker sets when #openStickerSet() is called", () => {
    wrapper.vm.openStickerSet();
    expect(
      wrapper.vm.scrumTeamsService.getRandomEmployees
    ).toHaveBeenCalledWith(mockScrumTeams);
    expect(wrapper.vm.notFamiliarEmployees).toEqual({
      mockRandomEmployees: mockRandomEmployees,
    });
    expect(wrapper.vm.remainedStickerSets).toBe(2);
    expect(actions.updateRemainedStickerSets).toHaveBeenCalled();
    expect(wrapper.vm.isStickerSetsOpened).toBe(true);
  });

  it("should paste employees to the album when #pasteStickersToAlbum() is called", () => {
    wrapper.vm.notFamiliarEmployees = mockRandomEmployees;
    wrapper.vm.pasteStickersToAlbum();
    expect(wrapper.vm.scrumTeamsService.updateScrumTeams).toHaveBeenCalledWith(
      mockScrumTeams,
      mockRandomEmployees.map((e) => e.id)
    );
    expect(wrapper.vm.isModalVisible).toBe(false);
    expect(actions.updateScrumTeams).toHaveBeenCalled();
    expect(wrapper.vm.isStickerSetsOpened).toBe(false);
  });
});
