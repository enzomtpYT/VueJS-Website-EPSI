<template>
  <div class="home">
    <TextImageComponent/>
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
