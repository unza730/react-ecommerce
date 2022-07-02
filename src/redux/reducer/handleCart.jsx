const cart = [];

export const hanldeCart = (state = cart, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                return state.map((x) => x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                return [
                    ...state, {
                        ...action.payload,
                        qty: 1
                    }
                ]
            }
            break;
        case "DELETE_ITEM":
            const exist1 = state.find((x) => x.id === action.payload.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== action.payload.id)
            } else {
                return state.map((x) => x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x)
            }
            break;
        default:
            return state;
            break;
    }
}