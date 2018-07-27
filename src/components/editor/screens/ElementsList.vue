<template>
    <aside class="elements-list">

        <input type="search" v-model="filterBy" placeholder="Search elements..." />

        <div class="flex flex-wrap">

            <div v-for="element in elementsToDisplay" :key="element.type"
                class="element-type flex-grow" draggable="true">
                <font-awesome-icon :icon="element.icon" />
                <div>{{element.label}}</div>
            </div>

        </div>

    </aside>
</template>

<script>
export default {
    name: 'elements-list',
    data() {
        return {
            elements: [
                { type: 'section', label: 'Section', icon: ['fas', 'grip-vertical'] },
                { type: 'column', label: 'Column', icon: ['fas', 'grip-horizontal'] },
                { type: 'text', label: 'Text', icon: ['fas', 'font'] },
                { type: 'list', label: 'List', icon: ['fas', 'list'] },
                { type: 'button', label: 'Button', icon: ['fas', 'band-aid'] },
                { type: 'divider', label: 'Divider', icon: ['fas', 'divide'] },
                { type: 'image', label: 'Image', icon: ['fas', 'images'] },
                { type: 'video', label: 'Video', icon: ['fas', 'video'] },
                { type: 'map', label: 'Map', icon: ['fas', 'map-marked-alt'] },
                { type: 'counter', label: 'Counter', icon: ['fas', 'clock'] },
                { type: 'progressBar', label: 'ProgressBar', icon: ['fas', 'server'] },
                { type: 'accordion', label: 'Accordion', icon: ['fas', 'layer-group'] },
            ],
            filterBy: ''
        }
    },
    computed: {
        elementsToDisplay() {
            return this.elements.filter( element => element.label.toLowerCase().includes(this.filterBy.toLowerCase()) )
        }
    }
};

// Search Using: https://vuejs.org/v2/guide/transitions.html#Staggering-List-Transitions
</script>

<style scoped lang="scss">
input {
    width: 96%;
    max-width: 100%;
    margin: 0.5em 2% 0;
    padding: 5px 10px;
    border: 1px solid #999;
}
.element-type {
    flex: 0 46%;
    margin: 10px 2%;
    padding: 10px 5px;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    background-color: #eee;
    font-size: 26px;
    font-weight: normal;
    cursor: move;

    &:hover {
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
    }

    > div {
        padding-top: 10px;
        font-size: 13px;
    }
}
</style>
