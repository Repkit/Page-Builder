<template>
    <div class="editor-add-element editor-box">

        <h2>Add Elements</h2>

        <div class="content">

            <input type="search" v-model="filterBy" placeholder="Search elements..." />

            <div class="flex flex-wrap space-between">

                <div v-for="element in elementsToDisplay" :key="element.type" class="element-type flex-grow"
                    :class="{ disabled: !element.active }" draggable="true" ref="drag" @drag="setDrag(element.type)">
                    <font-awesome-icon :icon="element.icon" />
                    <div>{{element.label}}</div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'editor-add-element',
    data() {
        return {
            elements: [
                { active: true, type: 'text', label: 'Text', icon: ['fas', 'font'] },
                { active: true, type: 'list', label: 'List', icon: ['fas', 'list'] },
                { active: true, type: 'button', label: 'Button', icon: ['fas', 'band-aid'] },
                { active: true, type: 'map', label: 'Map', icon: ['fas', 'map-marked-alt'] },
                { active: true, type: 'image', label: 'Image', icon: ['fas', 'images'] },
                { active: true, type: 'video', label: 'Video', icon: ['fas', 'video'] },
                { active: true, type: 'progressBar', label: 'ProgressBar', icon: ['fas', 'server'] },
                { active: false, type: 'counter', label: 'Counter', icon: ['fas', 'clock'] },
                { active: false, type: 'accordion', label: 'Accordion', icon: ['fas', 'layer-group'] },
                { active: false, type: 'tabs', label: 'Tabs', icon: ['fas', 'table'] },
                { active: false, type: 'gallery', label: 'Gallery', icon: ['fas', 'th'] },
                { active: false, type: 'carousel', label: 'Carousel', icon: ['fas', 'layer-group'] },
                { active: false, type: 'slider', label: 'Slider', icon: ['fas', 'clone'] },
                { active: false, type: 'divider', label: 'Divider', icon: ['fas', 'divide'] },
                { active: false, type: 'pricetable', label: 'Price Table', icon: ['fas', 'dollar-sign'] },
                { active: false, type: 'testamonial', label: 'Testamonial', icon: ['fas', 'comments'] },
            ],
            filterBy: ''
        }
    },
    computed: {
        elementsToDisplay() {
            return this.elements.filter( element => element.label.toLowerCase().includes(this.filterBy.toLowerCase()) )
        }
    },
    methods:{
        setDrag(type){
            this.$store.commit({ type: 'setDrag', drag: type });
        }
    }
};
</script>

<style scoped lang="scss">
input {
    width: 100%;
    max-width: 100%;
    margin: 5px 0 0;
    padding: 8px 10px;
    border: 1px solid #999;
    font-size: 12px;
}
.element-type {
    flex: 0 48%;
    margin: 10px 0 0;
    padding: 10px 5px;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    background-color: #eee;
    font-size: 26px;
    font-weight: normal;
    text-align: center;
    transition: 1s;
    cursor: move;

    &:hover {
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
        transition: .25s;
    }

    > div {
        padding-top: 10px;
        font-size: 13px;
    }

    &.disabled {
        color: #aaa;
        cursor: no-drop;
    }
}
</style>
