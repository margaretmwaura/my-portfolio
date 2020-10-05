<template>
    <div class="grid-x header">
        <div class="cell large-6 medium-6 small-5">
            <i class="fas fa-arrow-right header_title">
                <span class="one"> my-portfolio :</span>
                <span class="two"> git </span>
                <span class="three">(</span>
                <span class="four">home</span>
                <span class="three"> )</span>
            </i>
        </div>
        <div class="cell large-6 medium-6 small-7 header_right">
            <div class="header_right_icon">
                <p>
                    <input type="checkbox" id="switch" class="checkbox" v-model="darkMode"/>
                    <label for="switch" class="toggle"></label>
                </p>
            </div>
            <div id="responsive-menu" class="header_right_links">
                <div class="title-bar-right" data-responsive-toggle="example-menu" data-hide-for="medium">
                    <button class="menu-icon" type="button" data-toggle="example-menu"></button>
                </div>
                <div class="top-bar" id="example-menu">
                    <div class="top-bar-right">
                        <ul class="vertical medium-horizontal menu">
                            <li><a href="#0" class="header_links">Two</a></li>
                            <li><a href="#0" class="header_links">Three</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "navabar.vue",
        data() {
            return {
                darkMode: false,
            }
        },
        watch :{
            darkMode :{
                handler : function()
                {
                    let htmlElement = document.documentElement;
                    if (this.darkMode) {
                        this.$store.commit('SET_APPLICATION_THEME', 'dark');
                        htmlElement.setAttribute('theme', 'dark');
                    } else {
                        this.$store.commit('SET_APPLICATION_THEME', 'light');
                        htmlElement.setAttribute('theme', 'light');
                    }
                }

            }
        },
    }
</script>

<style scoped>

</style>
