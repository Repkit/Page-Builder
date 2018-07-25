<template>
    <div class="widget progress-bar-widget" :style="element.styles">

        <div class="border">
            
            <div class="fill flex" v-bind:style="{ height:'23px',color:'white','background-color': 'blue',width: status + '%'}">
                <div class="progress-text">
                    <slot name="progress-text">{{element.data.text}}</slot>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'progress-bar-widget',
    props: [ 'element' ],
    data() {
        return {
            status: this.element.data.min
        };
    },
    created() {
        var loadInterval = setInterval(() => {
            if (this.status >= this.element.data.max - this.element.data.step ) clearInterval(loadInterval);
            this.status += this.element.data.step;
        }, this.element.data.interval);
    }
};
</script>

<style scoped>
.border{
    background-color: gray
}
.progress-bar .border {
    background-color: aliceblue;
    border: 1px solid black;
    width: 100%;
    height: 25px;
    border-radius: 6px;
    position: relative;
}

.progress-bar .fill {
    color: black;
    justify-content: center;
    align-items: center;
    background-color: #456caa;
    margin: 0;
    padding: 0;
    width: 50%;
    height: 23px;
    border-radius: 6px;
}

.progress-bar h1 {
    color: black;
    font-size: 1em;
}

.progress-bar {
    width: 100%;
    margin-bottom: 5px;
}

.progress-text h2 {
    margin: 0;
    padding: 0;
    text-align: center;
}
</style>
