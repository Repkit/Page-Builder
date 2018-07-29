import SiteService from '@/services/SiteService';

export default {
    state: {
        // Editor
        editMode: false,
        editorScreen: 'editor-add-element',
        drag: null,

        // Selected Element Data
        selectedElement: null,
    },
    getters: {
        // Editor
        editMode: state => state.editMode,
        editorScreen: state => state.editorScreen,
        drag: state => state.drag,

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

        // Selected Element Data
        updateSelectedElement(state, { site, id }) {
            console.log('updateSelectedElement:', id);
            state.selectedElement = SiteService.getSelectedElementById(site, id);
            console.log('Updated state.selectedElement:', state.selectedElement);
            console.log('--------------');
        },
        removeSelectedElement(state) {
            state.selectedElement = null;
        }
    }
}
