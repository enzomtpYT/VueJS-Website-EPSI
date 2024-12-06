<template>
  <div class="textimgcont">
    <div class="card">
      <div class="textimg">
        <div class="text">
          <p class="textcomp-text">We're no strangers to love<br>
You know the rules and so do I<br>
A full commitment's what I'm thinkin' of<br>
You wouldn't get this from any other guy<br>
I just wanna tell you how I'm feeling<br>
Gotta make you understand<br>
Never gonna give you up<br>
Never gonna let you down<br>
Never gonna run around and desert you<br>
Never gonna make you cry<br>
Never gonna say goodbye<br>
Never gonna tell a lie and hurt you<br>
We've known each other for so long<br>
Your heart's been aching, but you're too shy to say it<br>
Inside, we both know what's been going on<br>
We know the game and we're gonna play it<br>
And if you ask me how I'm feeling<br>
Don't tell me you're too blind to see<br>
Never gonna give you up<br>
Never gonna let you down<br>
Never gonna run around and desert you<br>
Never gonna make you cry<br>
Never gonna say goodbye<br>
Never gonna tell a lie and hurt you<br>
Never gonna give you up<br>
Never gonna let you down<br>
Never gonna run around and desert you<br>
Never gonna make you cry<br>
Never gonna say goodbye<br>
Never gonna tell a lie and hurt you<br>
We've known each other for so long<br>
Your heart's been aching, but you're too shy to say it<br>
Inside, we both know what's been going on<br>
We know the game and we're gonna play it<br>
I just wanna tell you how I'm feeling<br>
Gotta make you understand<br>
Never gonna give you up<br>
Never gonna let you down<br>
Never gonna run around and desert you<br>
Never gonna make you cry<br>
Never gonna say goodbye<br>
Never gonna tell a lie and hurt you<br>
Never gonna give you up<br>
Never gonna let you down<br>
Never gonna run around and desert you<br>
Never gonna make you cry<br>
Never gonna say goodbye<br>
Never gonna tell a lie and hurt you<br>
Never gonna give you up<br>
Never gonna let you down<br>
Never gonna run around and desert you<br>
Never gonna make you cry<br>
Never gonna say goodbye<br>
Never gonna tell a lie and hurt you</p>
        </div>
        <img class="comptextimg-img" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB14ZAZXvYR0JMDHzRz7hdvw76w9Q" alt="image"/>
      </div>
    </div>  
  </div>
</template>
<script></script>
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
  width: 80%;
  color: #FFF;
}

.text {
  flex: 1;
  padding: 10px;
  text-align: justify;
}

.comptextimg-img {
  aspect-ratio: 16/9;
  border-radius: 8px;
}

.textcomp-text {
  font-size: 0.7em;
  line-height: 0.76em;
  padding: 5px;
  text-align: left;
  flex: 1;
}

.textimg {
  display: flex;
  align-items: center;
  width: 100%;
}

@media screen and (max-width: 1300px) {
  .comptextimg-img {
    width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .comptextimg-img {
    width: 100%;
  }
  .textimg {
    flex-direction: column;
  }
  .text {
    padding: 0;
  }
  .textcomp-text {
    font-size: 1em;
    line-height: 1.2em;
    padding: 5px;
  }
  
}
</style>
