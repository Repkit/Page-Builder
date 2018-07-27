<template>
    <aside class="elements-list">

        <input type="search" v-model="filterBy" placeholder="Search elements..." />

        <div class="flex flex-wrap">

            <div v-for="element in elementsToDisplay" :key="element.type"
                class="element-type flex-grow" draggable="true">
                XX<br><br>
                {{element.label}}
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
                { type: 'section', label: 'Section', icon: '' },
                { type: 'columns', label: 'Columns', icon: '' },
                { type: 'text', label: 'Text', icon: '' },
                { type: 'list', label: 'List', icon: '' },
                { type: 'button', label: 'Button', icon: '' },
                { type: 'divider', label: 'Divider', icon: '' },
                { type: 'image', label: 'Image', icon: '' },
                { type: 'video', label: 'Video', icon: '' },
                { type: 'map', label: 'Map', icon: '' },
                { type: 'counter', label: 'Counter', icon: '' },
                { type: 'progressBar', label: 'ProgressBar', icon: '' },
                { type: 'accordion', label: 'Accordion', icon: '' },
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
    cursor: move;

    &:hover {
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
    }
}
</style>
