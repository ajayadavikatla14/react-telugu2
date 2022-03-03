import React from 'react'
import { connect } from 'react-redux'

const Badge = ({products}) => {
  return (
    <>
        <div style={{'textAlign':'center', 'marginTop':'7rem'}}>
        <button type="button" class="btn btn-primary position-relative"  style={{'padding':'1rem'}} >
            Total Products
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
            {products.length}
            <span class="visually-hidden">unread messages</span>
            </span>
        </button>
        </div>
    </>
  )
}

const mapStateToProps=state=>({
    products : state
})

export default connect(mapStateToProps)(Badge)