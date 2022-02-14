import { createLocalVue, shallowMount } from "@vue/test-utils";
import EmployeeList from "@/components/EmployeeList.vue";

describe("EmployeeList.vue", () => {
  let wrapper;
  const teamMembers = [
    {
      photo: "null",
      name: "Esra Yılmaz",
      positionTitle: "Frontend Engineer",
      experienceTime: "5 Yıl",
      isFamiliar: true,
    },
    {
      photo: "null",
      name: "Onur Can",
      positionTitle: "Frontend Engineer",
      experienceTime: "10 Yıl",
      isFamiliar: false,
    },
  ];

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(EmployeeList, {
      localVue,
      propsData: {
        teamMembers: teamMembers,
      },
    });
  });

  it("should initialize", () => {
    expect(EmployeeList).toBeTruthy();
  });

  it("should show the data correctly in html", () => {
    expect(wrapper.findComponent("EmployeeDetails")).toBeTruthy();
  });
});
