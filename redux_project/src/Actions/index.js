export const incplayerone = () => async dispatch =>{
    dispatch({
        type : 'INC_PLAYERONE_SCORE'
    })
}

export const decplayerone = () => async dispatch =>{
    dispatch({
        type : 'DECR_PLAYERONE_SCORE'
    })
}

export const incplayertwo = () => async dispatch =>{
    dispatch({
        type : 'INC_PLAYERTWO_SCORE'
    })
}

export const decplayertwo = () => async dispatch =>{
    dispatch({
        type : 'DECR_PLAYERTWO_SCORE'
    })
}