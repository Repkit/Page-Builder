<template>
    <div class="editor-elements-tree editor-box">

        <h2>Elements Tree</h2>

        <div class="content" v-html="tree">
        </div>

    </div>
</template>

<script>
export default {
    name: 'editor-elements-tree',
    props: [ 'site' ],
    computed: {
        tree() {
            return this.getTree(this.site.elements);
        }
    },
    methods: {
        getTree(element) {
            var strHTML = '<ul class="tree">';
            element.forEach(child => {
                strHTML += `<li> <span> ${child.settings.type} </span> </li>`;
                if (child.elements) {
                    var childsHTML = this.getTree(child.elements);
                    strHTML += `<li class="inner"> ${childsHTML} </li>`;
                }
            });
            strHTML += '</ul>';
            return strHTML;
        }
    }
};
</script>

<style lang="scss">
ul.tree {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    text-transform: capitalize;
    font-weight: bold;

    li {
        background-color: #eee;
        border: 1px solid #ddd;
        margin: 3px 0;
        padding: 5px 10px;

        &.inner {
            background-color: transparent;
            border: 0;
            padding: 0;
        }

        ul {
            padding-left: 25px;
        }

        &:hover > span {
            color: #F66;
        }
    }
}
</style>
