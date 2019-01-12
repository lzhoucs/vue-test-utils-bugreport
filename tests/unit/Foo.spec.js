import { shallowMount } from "@vue/test-utils";
import Foo from "@/components/Foo.vue";

describe("Foo.vue", () => {
  it("renders true", () => {
    const wrapper = shallowMount(Foo);
    expect(wrapper.text()).toMatch("true");
  });
});
