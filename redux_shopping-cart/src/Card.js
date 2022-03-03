import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { AddProduct } from './Actions/Action'
import { RemoveProduct } from './Actions/Action'

const Card = ({products,AddProduct,RemoveProduct}) => {
    const [item,setItem]=useState('');
    const submithHandler=async e=>{
        e.preventDeafult();
        if(item !== ''){
            await AddProduct({name:item});
            setItem('');
        }
        setItem('')
    }
  return (
    <>
        <center>
            <div className="card" style={{"width":"18rem"}} >
                <div className="card-body">
                    <form onSubmit={submithHandler}>
                        <input type="text" placeholder='Add Products' value={item} onChange={e=>setItem(e.target.value)} />
                        <button type='submit' className='btn-btn-success'>
                            Add Product
                        </button>
                    </form>
                    <br />
                    {products.map(product=>{
                        return(
                            <div className="item">
                                {product.name}
                            <span onClick={()=>RemoveProduct(product.name)} className='badge square-pill'>
                                X
                            </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </center>
    </>
  )
}

const mapStateToProps=state=>({
    products : state,
    
})

export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Card)