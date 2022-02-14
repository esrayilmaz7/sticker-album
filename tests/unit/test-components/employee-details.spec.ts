import { createLocalVue, shallowMount } from "@vue/test-utils";
import EmployeeDetails from "@/components/EmployeeDetails.vue";

describe("EmployeeDetails.vue", () => {
  let wrapper;
  const member = {
    photo: "null",
    name: "Esra Yılmaz",
    positionTitle: "Frontend Engineer",
    experienceTime: "5 Yıl",
    isFamiliar: true,
  };

  const member2 = {
    photo: "null",
    name: "Esra Yılmaz",
    positionTitle: "Frontend Engineer",
    experienceTime: "5 Yıl",
    isFamiliar: false,
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(EmployeeDetails, {
      localVue,
      propsData: {
        member: member,
      },
    });
  });

  it("should initialize", () => {
    expect(EmployeeDetails).toBeTruthy();
  });

  it("should show the data correctly in html", () => {
    expect(wrapper.find("img").html()).toContain(member.photo);
    expect(wrapper.findAll("p").at(0).html()).toContain(member.name);
    expect(wrapper.findAll("p").at(1).html()).toContain(member.positionTitle);
    expect(wrapper.findAll("p").at(2).html()).toContain(member.experienceTime);
  });

  it("should show the photo of the employee if s/he is not familiar", async () => {
    await wrapper.setProps({ member: member2 });
    expect(wrapper.find("img").html()).toContain(wrapper.vm.unknownPhotoUrl);
  });
});
