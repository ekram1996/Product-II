import React from 'react'
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map((product, idx)=>{
                return <Link  to={"/" +"product"+"/"+ product._id} key={idx}>{product.title}</Link>
            })}
        </div>
    )
}