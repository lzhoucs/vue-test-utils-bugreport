<template>
  <div>
    <foo :disabled="true" ref="foo1" />
    <v-btn :disabled="true" ref="vbtn1"></v-btn>
  </div>
</template>

<script>
import Foo from "./Foo";
export default {
  name: "Bar",
  components: {
    Foo
  }
};
</script>
