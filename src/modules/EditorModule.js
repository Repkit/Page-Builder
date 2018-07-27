import EditorService from '@/services/EditorService';

export default {
    state: {
        editMode: false,
        selectedElement: null,
        selectedElementId: null,
    },
    getters: {
        editMode: state => state.editMode,
        selectedElement: state => state.selectedElement,
        selectedElementId: state => state.selectedElement,
    },
    mutations: {
        updateSelectedElement(state, { site, id }) {
            state.selectedElementId = id;
            state.selectedElement = EditorService.getSelectedElementById(site, id);
        },
        removeSelectedElement(state) {
            state.selectedElementId = null;
            state.selectedElement = null;
        }
    }
}