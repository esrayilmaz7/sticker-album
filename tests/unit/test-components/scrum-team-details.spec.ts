import { createLocalVue, shallowMount } from "@vue/test-utils";
import ScrumTeamDetails from "@/components/ScrumTeamDetails.vue";

describe("ScrumTeamDetails.vue", () => {
  let wrapper;
  const teamInformation = {
    logo: "logoUrl",
    teamName: "Web Team",
    slogan: "Best Team Web Team",
    description: "Team description",
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(ScrumTeamDetails, {
      localVue,
      propsData: {
        teamInformation: teamInformation,
      },
    });
  });

  it("should initialize", () => {
    expect(ScrumTeamDetails).toBeTruthy();
  });

  it("should show the data correctly in html", () => {
    expect(wrapper.find("img").html()).toContain(teamInformation.logo);
    expect(wrapper.findAll("p").at(0).html()).toContain(
      teamInformation.teamName
    );
    expect(wrapper.findAll("p").at(1).html()).toContain(teamInformation.slogan);
    expect(wrapper.findAll("p").at(2).html()).toContain(
      teamInformation.description
    );
  });
});
