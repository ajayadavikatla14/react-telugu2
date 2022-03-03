import React from 'react'
import { connect } from 'react-redux'
import { decplayerone, decplayertwo, incplayerone, incplayertwo } from './Actions'


const App = ({playerone,playertwo, decplayerone, decplayertwo, incplayerone, incplayertwo}) => {
  return (
    <>
        <div style={{'textAlign':'center'}}>
        <div className="card" style={{'width':'30rem'}}>
          <div className="card-body">
            <h3>PLAYER ONE DETAILS: </h3>
            <p>name : {playerone.name} {' '} score: {playerone.score}</p>
            <button onClick={()=>incplayerone()}>Increment</button>
            <button onClick={()=>decplayerone()}>Decrement</button> 
          </div>
        </div>
        <div className="card" style={{'width':'30rem'}}>
          <div className="card-body">
            <h3>PLAYER TWO DETAILS: </h3>
            <p>name : {playertwo.name} {' '} score: {playertwo.score}</p>
            <button onClick={()=>incplayertwo()}>Increment</button>
            <button onClick={()=>decplayertwo()}>Decrement</button>
          </div>
        </div>
        </div>
    </> 
  )
}

const mapStateToProps= state => ({
  playerone : state.playerone,  
  playertwo : state.playertwo
})

export default connect(mapStateToProps,{incplayerone,decplayerone,incplayertwo,decplayertwo})(App)