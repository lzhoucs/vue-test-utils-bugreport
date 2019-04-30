import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Foo from "@/components/Foo.vue";
import Router from "vue-router";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(Router);

describe("Foo.vue", () => {
  beforeEach(() => {
    // initial to home route
    router.push("/");
  });
  it("should go to /bar when clicking on a router link with string location", () => {
    const wrapper = mount(Foo, {
      localVue,
      router
    });
    wrapper.find({ ref: "bar-link-string" }).trigger("click");
    expect(router.currentRoute.fullPath).toBe("/bar/123#hash1");
  });

  it("should go to /bar when clicking on a router link with object location", () => {
    const wrapper = mount(Foo, {
      localVue,
      router
    });
    wrapper.find({ ref: "bar-link-obj" }).trigger("click");
    expect(router.currentRoute.fullPath).toBe("/bar/123#hash1");
  });

  it("should go to /bar when clicking on a button that uses `router.push` with string location", () => {
    const wrapper = shallowMount(Foo, {
      localVue,
      router
    });
    wrapper.find({ ref: "bar-btn-string" }).trigger("click");
    expect(router.currentRoute.fullPath).toBe("/bar/123#hash1");
  });

  it("should go to /bar when clicking on a button that uses `router.push` with object location", () => {
    const wrapper = shallowMount(Foo, {
      localVue,
      router
    });
    wrapper.find({ ref: "bar-btn-obj" }).trigger("click");
    expect(router.currentRoute.fullPath).toBe("/bar/123#hash1");
  });
});
