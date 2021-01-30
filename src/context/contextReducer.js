export const ACTION = {
    ADD_TRANSACTION: 'add-transaction',
    DELETE_TRANSACTION: 'delete-transaction'
}

const contextReducer = (state, action) => {
    switch(action.type){
        case ACTION.ADD_TRANSACTION:
            return [action.payload, ...state];
        case ACTION.DELETE_TRANSACTION:
            return state.filter(t => t.id !== action.payload);
        default:
            return state;
    }

}

export default contextReducer