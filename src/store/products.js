/* eslint-disable no-unused-expressions */
let initialState ={
    products :  [
        {
            category: 'ELECTRONICS',
            name: 'Samsung 27" M5 1080p FHD Smart Monitor With Streaming TV',
            description: 'Monitor',
            price: '175$',
            inventoryCount: 3,
            img: 'https://content.abt.com/media/images/products/BDP_Images/Samsung-27-Inch-M5-1080p-FHD-Smart-Monitor-With-Streaming-TV-LS27AM500NNXZA.jpg',
          },
        {
        category: 'ELECTRONICS',
        name: 'Samsung Galaxy Book Pro 13.3" Mystic Silver Laptop Intel Core i7-1165G7 8GB RAM 512GB SSD',
        description: 'Laptop',
        price: '1000$',
        inventoryCount: 7,
        img: 'https://m.media-amazon.com/images/I/51y4pytQpoS._AC_SL1150_.jpg',
      },
      {
        category: 'FOOD',
        name: 'Squisito',
        description: 'Squisito',
        price: '28$',
        inventoryCount: 3,
        img: 'https://cdn11.bigcommerce.com/s-8ixoraq0x8/images/stencil/1280x1280/products/18346/73710/Squisito-Lazy-Susan-1__92299.1603771256.jpg?c=1',
      },
      
      {
        category: 'FOOD',
        name: 'Saporito',
        description: 'Saporito',
        price: '32$',
        inventoryCount: 12,
        img: 'https://img.grouponcdn.com/deal/q9SSjhWJ3DJg36ibBW3H/qg-440x267/v1/c870x524.jpg',
      },

    ]
    


    
}


 const ReduceProducts=(state = initialState, action) => {
    const {type,payload}=action;
  
    switch (type) {
        case "ACTIVE":

            let product=state.products.filter(product=>{
               return   product.category === payload ?product.category  : null
                
            })
            console.log(product);
            return {...state,product:product};
            case "RESET":
            return initialState; 
        default:
            return state;
    }
}

export default ReduceProducts