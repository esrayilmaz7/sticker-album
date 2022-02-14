import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Modal.vue";

describe("Modal.vue", () => {
  let wrapper = shallowMount(Modal);

  it("should initialize", () => {
    expect(Modal).toBeTruthy();
  });

  it("should have header, body and footer sections in html", () => {
    expect(wrapper.find(".modal-header").html()).toContain("header");
    expect(wrapper.find(".modal-body").html()).toContain("section");
    expect(wrapper.find(".modal-footer").html()).toContain("footer");
  });
});
