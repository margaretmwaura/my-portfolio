<template>
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-6 medium-6 small-8">
                    <i class="fas fa-arrow-right"> my-portfolio:git <span>(home)</span></i>
                </div>
                <div class="cell large-6 medium-6 small-4">
                    <div id="responsive-menu">
                        <div class="title-bar-right" data-responsive-toggle="example-menu" data-hide-for="medium">
                            <button class="menu-icon" type="button" data-toggle="example-menu"></button>
                            <div class="title-bar-title">Menu</div>
                        </div>
                        <div class="top-bar" id="example-menu">
                            <div class="top-bar-right">
                                <ul class="vertical medium-horizontal menu">
                                    <li><a href="#0">Two</a></li>
                                    <li><a href="#0">Three</a></li>
                                </ul>
                            </div>
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
