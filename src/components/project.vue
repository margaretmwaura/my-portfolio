<template>
  <div class="projects">
      <h3><u>Personal Projects</u> <span class="counter">
                           total:  <ICountUp
              :delay="delay"
              :endVal="endVal"
              :options="options"
              @ready="onReady"
      />
                          </span></h3>
      <p>The following are the projects that I have been working on with the goal of sharpening my skills
       and also as fun projects</p>
      <br>
      <br>
      <h5><i>Tech Stack : Vuejs , Webpack , SASS, HTML</i></h5>
      <br>
      <div class="grid-x grid-margin-x grid-padding-x">
          <div class="cell large-6 medium-6 small-12 projects_one">
              <p>The following is a frontend mastery that I took on. It potrays the use of grids and
              media queries. I added a count feature for the number that displays at the very top
              using the count library from vue js.
              </p>
          </div>
          <div class="cell large-6 medium-6 small-12">
             <p>The link to the challenge :
              <a href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H">
                  Frontend Mastery Challenge
              </a>
             </p>
              <p>The link to the challenge I did ( hosted on github.io):
              <a href=" https://margaretmwaura.github.io/FrontendMatery--The-Dashboard/">Code Base</a>
              </p>
          </div>
      </div>
      <hr/>
      <br>
      <br>
      <h5><i>Tech Stack : Vuejs , Webpack , SASS, HTML</i></h5>
      <br>
      <div class="grid-x grid-margin-x grid-padding-x">
          <div class="cell large-6 medium-6 small-12 projects_one">
              <p>The Following is a cool animation that i saw on twitter and I decide to try it out.
                  I used vuejs transitions to implement it. To be in a position to view the transitions
                  kindly click on the buttons that are on the red backgrounds.
                  <br>
                  ps :: kindly view the animation on medium screens
              </p>
          </div>
          <div class="cell large-6 medium-6 small-12">
              <br>
              <p>The link to the tweet :
              <a href="https://twitter.com/S_Alwayshungry/status/1298182551954046978">
                  The tweet
              </a>
              </p>
              <br>
              <p>The link to the challenge I did ( hosted on github.io):
              <a href="https://margaretmwaura.github.io/animated-login-signup-pages/">Code Base</a>
              </p>
          </div>
      </div>
      <hr/>
      <br>
      <br>
      <h5><i>Tech Stack : Laravel</i></h5>
      <br>
      <div class="grid-x grid-margin-x grid-padding-x">
          <div class="cell large-6 medium-6 small-12 projects_one">
              <p>We were challenging ourselves at work to create a webscrapper and so I did create one.
                  It scrapes data from the following website including audio. To practice the code, clone the project
                  from github. Run the command : scrape_french_info in your virtual env.
              </p>
          </div>
          <div class="cell large-6 medium-6 small-12">
              <br>
              <p>The link to the website I was scrapping from :
                  <a href="https://www.rocketlanguages.com/french/lessons/french-alphabet">
                      The french teaching website
                  </a>
              </p>
              <br>
              <p>The link to the challenge I did on github:
                  <a href="https://github.com/margaretmwaura/WebScrapper">Code Base</a>
              </p>
          </div>
      </div>
      <hr/>
  </div>
</template>

<script>
    import ICountUp from 'vue-countup-v2';
    export default {
        name: "project",
        components: {
            ICountUp,
        },
        data() {
            return {
                darkMode: false,
                delay: 1000,
                endVal: 3,
                options: {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            }
        },
        methods: {
            onReady: function (instance, CountUp) {
                const that = this;
                instance.update(that.endVal + 0);
            }
        }
    }
</script>

<style scoped>

</style>
