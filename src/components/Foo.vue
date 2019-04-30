<template>
  <div>
    <router-link ref="bar-link-string" :to="barLocationString"
      >To Bar with router-link string location</router-link
    >
    <router-link ref="bar-link-obj" :to="barLocationObj"
      >To Bar with router-link object location</router-link
    >
    <button ref="bar-btn-string" @click="toBarString">
      To Bar with `router.push` string location
    </button>
    <button ref="bar-btn-obj" @click="toBarObj">
      To Bar with `router.push` object location
    </button>
  </div>
</template>

<script>
export default {
  name: "Foo",
  data: () => ({
    barLocationString: "/bar#hash1",
    barLocationObj: { name: "bar", hash: "#hash1" }
  }),
  methods: {
    toBarString() {
      this.$router.push(this.barLocationString);
    },
    toBarObj() {
      this.$router.push(this.barLocationObj);
    }
  }
};
</script>
