<template>
  <div class="home">
    <TextImageComponent :imglink="link" :text="text"/>
    <div class="divider mb-5 mt-5"></div>
    <TextImageComponent :imglink="link2" :text="text2"/>
    <div class="divider mt-5"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import TextImageComponent from "@/components/TextImageComponent.vue";

export default {
  name: "HomeView",
  data() {
    return {
      link: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB14ZAZXvYR0JMDHzRz7hdvw76w9Q",
      text: "We're no strangers to love You know the rules and so do I A full commitment's what I'm thinkin' of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
      link2: "https://cdn.discordapp.com/avatars/153274351561605120/adb71f998dfdbc417983fc955e83b52e.png?size=1024",
      text2: "Biography George Tsotsos is an independent electronic music artist going by the name \"Geoxor\" from Florina, Greece. Born on the 27th of March 2001, Geoxor begun his first journey into music in 2005 when his sister brought home a box of CDs one of which contained FL Studio. he then forgot about it up until the age of 10 when he re-discovered the same software again and installed it on his computer. Geoxor did not have internet growing up so all he could do on his computer was play games or mess around with music software. In 2013 Geoxor's family was able to afford internet, which helped him learn more about music through online tutorials and videos, this also gave him the ability to publish his early work. In 2016 NoCopyrightSounds signed his single “You & I” and has surpassed 10 million views on YouTube. In 2017 Geoxor released multiple singles along with his first EP called “Funky World” featuring 3 tunes one of which DSG promoted on YouTube. In 2018 Geoxor released his second EP called “Time of Waste” as a pun directed towards his real life events that were happening as he was making the EP. In 2019 Geoxor started off the year by releasing “Stardust” a catchy video game style tune, which DSG had promoted on his YouTube, getting up to 1+ million views within 3 months, further more having Knife Party’s support @ ULTRA 2019 with the tune “Nana” ",
    
    };
  },
  components: {
    TextImageComponent,
  },
};
</script>
