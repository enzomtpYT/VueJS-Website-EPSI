<template>
  <div class="home">
    <TextImageComponent description="Welcome to Your Vue.js App" title="Hi!" imgsrc="https://tse1.mm.bing.net/th?id=OIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx&pid=15.1" />
  </div>
</template>

<script>
// @ is an alias to /src
import TextImageComponent from "@/components/TextImageComponent.vue";

export default {
  name: "HomeView",
  components: {
    TextImageComponent,
  },
};
</script>
