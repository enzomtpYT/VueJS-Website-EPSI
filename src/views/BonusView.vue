<template>
    <div class="bonus">
      <BonusComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import BonusComponent from "@/components/BonusComponent.vue";
  
  export default {
    name: "BonusView",
    components: {
      BonusComponent,
    },
  };
  </script>
  