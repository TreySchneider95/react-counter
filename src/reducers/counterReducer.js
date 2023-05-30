export default function counterReducer (state, action) {
    switch (action.type) {
        case 'add':
            return state += 1
        case 'subtract':
            if(state > 0){
                return state -= 1
            }
            return 0
        default:
            break;
    }
}