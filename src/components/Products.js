import React from 'react'
import {reset,selectCate} from '../store/data'
import {connect} from 'react-redux';
const Products = props => {
    // const list =props.Products.filter(product=> product)

  
    return (
        <>
        {/* <section>
            <h2>hello from productes</h2>
            <ul>
            {props.products.map((product, idx) =>
              <ul key={idx}>
                  <li> {product.name}</li>
                  <li>{product.description}</li>
                  <li>{product.price}</li>
                  <li>{product.inventoryCount}</li>
                  <img src={product.img} alt={product.img}/>
              </ul>
            )}
            </ul>
        </section> */}
        </>
    )
}

const mapStateToProps = (state) => {
    // console.log('STATE???', state.ReduceProdect);
    return  state.ReduceProdect;
  };

const mapDispatchToProps = {selectCate, reset};

export default connect(mapStateToProps, mapDispatchToProps)(Products);