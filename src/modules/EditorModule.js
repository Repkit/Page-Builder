import EditorService from '@/services/EditorService';

export default {
    state: {
        site: {},
        editMode: false,
        editorScreen:'Element',
        selectedElement: null,
        selectedElementId: null,
    },
    getters: {
        editMode: state => state.editMode,
        selectedElement: state => state.selectedElement,
        selectedElementId: state => state.selectedElement,
        editorScreen:state => state.editorScreen,
    },
    mutations: {
        setEditorScreen(state,{status}){
          state.editorScreen=status
        },
        setSiteToEdit(state, { site }) {
            state.site = site;
        },
        updateSelectedElement(state, { id }) {
            state.selectedElementId = id;
            state.selectedElement = EditorService.getSelectedElementById(state.site, id);
        },
        removeSelectedElement(state) {
            state.selectedElementId = null;
            state.selectedElement = null;
        },
        removeElement(state, { id }){
            console.log('id of the selected element:',id)
            console.log('elements:',state.site.elements)
            console.log('elements:',EditorService.removeSelectedElementById(state.site.elements, id))

        }
    },
}