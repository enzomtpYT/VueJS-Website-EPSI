<template>
  <div class="textimgcont">
    <div class="card">
      <div class="textimg">
        <div class="text">
          <p id="textst" class="textcomp-text">{{ text }}</p>
        </div>
        <img class="comptextimg-img" :src="imglink" alt="image"/>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  props: ['imglink', 'text'],
}
</script>
<style>
.textimgcont {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  display: flex;
  background-color: #3b2858;
  border-radius: 25px;
  padding: 20px;
  width: 90%;
  color: #FFF;
}
.text {
  flex: 1;
  padding: 10px;
  text-align: justify;
}
.comptextimg-img {
  border-radius: 8px;
  max-height: 30vh;
  max-width: 25vw;
}
.textcomp-text {
  padding: 5px;
  text-align: left;
  flex: 1;
}
.textimg {
  display: flex;
  align-items: center;
  width: 100%;
}
@media screen and (max-width: 800px) {
  .comptextimg-img {
    max-height: 20vh;
    max-width: 84vw;
  }
  .textimg {
    flex-direction: column;
  }
  .text {
    padding: 0;
  }
  .textcomp-text {
    font-size: 0.7em;
    line-height: 0.9em;
    padding: 5px;
  }
}
</style>
