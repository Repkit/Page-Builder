import SiteService from '@/services/SiteService';

export default {
    state: {
        // Editor
        editMode: false,
        editorScreen: 'editor-add-element',
        drag: null,
        dragParentId: null,

        // Selected Element Data
        selectedElement: null,
    },
    getters: {
        // Editor
        editMode: state => state.editMode,
        editorScreen: state => state.editorScreen,
        drag: state => state.drag,
        dragParentId: state => state.dragParentId,

        // Selected Element Data
        selectedElement: state => state.selectedElement,
    },
    mutations: {
        // Editor
        setEditorScreen(state, { screen }) {
            state.editorScreen = screen;
        },
        setDrag(state, { drag }) {
            state.drag = drag;
        },
        updateDropParent(state, { site, elementId }) {
            var parent = SiteService.getParentById(site, elementId)
            state.dragParentId = parent._id
        },

        // Selected Element Data
        updateSelectedElementById(state, { site, id }) {
            state.selectedElement = SiteService.getSelectedElementById(site, id);
        },
        removeSelectedElement(state) {
            state.selectedElement = null;
        },
        updateSelectedElement(state, { newElement }) {
            state.selectedElement = newElement;
        },
    }
}
