<template>
    <div class="grid-x header">
        <div class="cell large-6 medium-6 small-8 ">
            <i class="fas fa-arrow-right header_icon">
                <span class="one"> my-portfolio :</span>
                <span class="two"> git </span>
                <span class="three">(</span>
                <span class="four">home</span>
                <span class="three"> )</span>
            </i>
        </div>
        <div class="cell large-6 medium-6 small-4">
            <div id="responsive-menu">
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
    }
</script>

<style scoped>

</style>
