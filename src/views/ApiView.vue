<template>
    <div class="api">
      <ApiComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ApiComponent from "@/components/ApiComponent.vue";
  
  export default {
    name: "ApiView",
    components: {
      ApiComponent,
    },
  };
  </script>
  