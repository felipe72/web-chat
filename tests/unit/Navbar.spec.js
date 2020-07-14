import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "~components/Navbar";
import Vuetify from "vuetify";

const localVue = createLocalVue();

describe("Navbar", () => {
  /** @type {import('@vue/test-utils').Wrapper} */
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      vuetify: new Vuetify(),
      stubs: [
        "v-list-item",
        "v-list-item-action",
        "v-icon",
        "v-list-item-content",
        "v-list",
        "v-list-item-title",
        "v-list-item-content",
        "v-navigation-drawer",
      ],
      localVue,
      propsData: { value: false },
    });
  });

  describe("Computed", () => {
    describe("model", () => {
      describe("get", () => {
        it("should return false if value prop is false", () => {
          wrapper.setProps({ value: false });
          expect(wrapper.vm.model).toBeFalsy();
        });

        it("should return true if value prop is true", () => {
          wrapper.setProps({ value: true });
          expect(wrapper.vm.model).toBeTruthy();
        });
      });
      describe("set", () => {
        it("should emit input event when a value has been assigned", () => {
          wrapper.vm.model = { name: "Test" };
          expect(wrapper.emitted()).toEqual({ input: [[{ name: "Test" }]] });
        });
      });
    });
  });
});
