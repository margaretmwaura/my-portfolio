<template>
   <div class="grid-container home">
       <div class="grid-x">
           <div class="cell large-1 medium-1 small-0"></div>
           <div class="cell large-10 medium-10 small-12">
               <div class="home_pronounce">
               <i class="fas fa-volume-up" v-on:click="playNamePronounciation()"></i>
               </div>
               <vue-typed-js :strings="[' ^1000 Margaret Wanjiru Mwaura', 'Mwaura Margaret Wanjiru']"
                             :backSpeed="50" @onComplete="doSmth()">
                   <h1>It is <span class="typing"></span></h1>
               </vue-typed-js>
               <transition name="fade">
                   <p v-if="show">Lover of Mac Computers and yet to understand the buzz with
                       <br>
                       <span>mechanical keyboards</span>  </p>
               </transition>
               <div class="home_social_icons" v-if="show">
                   <a href="https://twitter.com/shiimwaura" class="fab fa-twitter"></a>
                   <a href="mailto:mwauramargaret1@gmail.com" class="fas fa-envelope-open-text"></a>
                   <a href="https://github.com/margaretmwaura" class="fab fa-github"></a>
                   <a href="https://www.linkedin.com/in/mwauramargaret/" class="fab fa-linkedin-in"></a>
               </div>
           </div>
           <div class="cell large-1 medium-1 small-0"></div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "home",
        components: { },
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            doSmth() {
                this.show = true;
            },
            playNamePronounciation() {
                var msg = new SpeechSynthesisUtterance();
                var voices = window.speechSynthesis.getVoices();
                msg.voice = voices[10]; // Note: some voices don't support altering params
                msg.voiceURI = 'native';
                msg.volume = 1; // 0 to 1
                msg.rate = 1; // 0.1 to 10
                msg.pitch = 2; //0 to 2
                msg.text = 'Margaret Wanjiru Mwaura';
                msg.lang = 'en-US';

                // msg.onend = function(e) {
                //     console.log('Finished in ' + event.elapsedTime + ' seconds.');
                // };

                speechSynthesis.speak(msg);
            }
        },
    }
</script>

<style scoped>

</style>
