import EditorService from '@/services/EditorService';

export default {
    state: {
        // Site Data
        site: {},

        // Editor
        editMode: false,
        editorScreen: 'editor-add-element',
        drag: null,

        // Selected Element Data
        selectedElement: null,
    },
    getters: {
        // Site Data
        site: state => state.site,

        // Editor
        editMode: state => state.editMode,
        editorScreen: state => state.editorScreen,
        drag: state => state.drag,

        // Selected Element Data
        selectedElement: state => state.selectedElement,
    },
    mutations: {
        // Site Data
        setSiteToEdit(state, { site }) {
            state.site = site;
        },
        removeElement(state, { id }) {
            state.site.elements = EditorService.removeSelectedElementById(state.site.elements, id);
        },
        cloneElement(state, { id }) {
            state.site.elements = EditorService.cloneElementById(state.site.elements, id);
        },

        // Editor
        setEditorScreen(state, { screen }) {
            state.editorScreen = screen;
        },
        setDrag(state, { drag }) {
            state.drag = drag;
        },

        // Selected Element Data
        updateSelectedElement(state, { id }) {
            state.selectedElement = EditorService.getSelectedElementById(state.site, id);
        },
        removeSelectedElement(state) {
            state.selectedElement = null;
        }
    }
}
