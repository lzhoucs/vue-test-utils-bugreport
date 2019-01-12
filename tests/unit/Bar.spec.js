import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Bar from "@/components/Bar.vue";
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();
// localVue.use(Vuetify) causing error, see: See https://github.com/vuetifyjs/vuetify/issues/4068
Vue.use(Vuetify);

describe("Bar.vue tests", () => {
  it("#1 - passing.", () => {
    const wrapper = shallowMount(Bar, { localVue });
    const fooWrapper = wrapper.find({ ref: "foo1" });
    expect(fooWrapper.props("disabled")).toBe(true);
  });

  it("#2 - failing.", () => {
    const wrapper = shallowMount(Bar, { localVue });
    const vbtnWrapper = wrapper.find({ ref: "vbtn1" });
    expect(vbtnWrapper.props("disabled")).toBe(true);
  });

  it("#3 - passing. Same as #2, but use `mount`", () => {
    const wrapper = mount(Bar, { localVue });
    const vbtnWrapper = wrapper.find({ ref: "vbtn1" });
    expect(vbtnWrapper.props("disabled")).toBe(true);
  });
});
