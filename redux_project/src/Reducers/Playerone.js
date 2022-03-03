const initialState={
    name:'john',
    score:100,
}

export default function playeroneReducer(state=initialState,action){
    const {type,upload}= action;
    switch(type){
        case 'INC_PLAYERONE_SCORE':
            return {...state,score:state.score+1}
        case 'DECR_PLAYERONE_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;
    }
}