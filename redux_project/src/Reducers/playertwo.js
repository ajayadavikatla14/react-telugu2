const initialState={
    name:'root',
    score:90,
}

export default function playertwoReducer(state=initialState,action){
    const {type,upload}= action;
    switch(type){
        case 'INC_PLAYERTWO_SCORE':
            return {...state,score:state.score+1}
        case 'DECR_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;
    }
}