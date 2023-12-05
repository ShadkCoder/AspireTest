import { createStore } from 'vuex'

export interface State {
    list: Array<Object>,
    uids: Array<Number>,
    flickPanel: Object,
    frozen: Array<Number>,
    freezeActive: Boolean,
    addModalActive: Boolean,
    cancelStatus: Boolean,
}
export default createStore<State>({
    state: {
        list: [ //ideally initial values should come from an API, hence would get reset on page load
            { Name: 'Mark Henry', cardNo: '1234567890009999', expiry: '12/20', cvv: 123, uid: 0 },
            { Name: 'John Jules', cardNo: '4561237890009876', expiry: '08/23', cvv: 456, uid: 1 },
            { Name: 'Patrick Vieira', cardNo: '7891234560005432', expiry: '04/24', cvv: 789, uid: 2 },
        ],
        uids: [0, 1, 2],
        flickPanel: {},
        frozen: [],
        freezeActive: true,
        addModalActive: false,
        cancelStatus: false
    },
    mutations: { //Synchronous
        updatePanel(state: State, payload: Object) {
            state.flickPanel = payload;
        },
        updateFrozen(state: State, payload: Number) {
            state.frozen.push(payload)
        },
        removeFrozen(state: State, payload: Number) {
            let indexPayload = state.frozen.indexOf(payload)
            state.frozen.splice(indexPayload, 1)
        },
        toggleFreeze(state: State, payload: Boolean) {
            state.freezeActive = payload
        },
        toggleAddModal(state: State, payload: Boolean) {
            state.addModalActive = payload
        },
        updateList(state: State, payload: Object) {
            state.list.push(payload)
        },
        updateUids(state: State, payload: Number) {
            state.uids.push(payload)
        },
        toggleCancel(state: State, payload: Boolean) {
            state.cancelStatus = payload
        },
        cancelCard(state: State) {
            let currentIndex = state.flickPanel.index
            let indexPayload = state.frozen.indexOf(currentIndex)
            state.frozen.splice(indexPayload, 1)
            state.list.forEach(
                function (item: Object) {
                    if (item.uid == currentIndex) {
                        state.list.splice(currentIndex, 1)
                    }
                }
            )
            var counter = 0 // reset the Uids and frozen ones in updated list
            state.list.forEach(
                function (item: Object) {
                    if (state.frozen.includes(item.uid)) {
                        state.frozen.push(counter)
                    }
                    item.uid = counter
                    counter = counter + 1
                }
            )
        }
    },
    actions: { //Aynchronous
    },
    modules: {},
    getters: {
        getList: state => state.list,
        getPanel: state => state.flickPanel,
        getFrozen: state => state.frozen,
        getFreezeStatus: state => state.freezeActive,
        getModalStatus: state => state.addModalActive,
        getUids: state => state.uids,
        getCancelStatus: state => state.cancelStatus
    },
})