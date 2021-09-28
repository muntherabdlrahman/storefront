/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */


let initialState = {
    categories:[
        {
        normalizedName:"FOOD",
        displayName:"Italian food",
        description:"Squisito, Ottimo, Eccellente, Gustoso / Saporito, Spettacolare "
    },
    { 
    normalizedName: 'ELECTRONICS', 
    displayName: 'Samsung', 
    description: 'One of the worlds largest producers of electronic devices' 
}
]
}





// eslint-disable-next-line import/no-anonymous-default-export
 const ReduceCategory=(state = initialState, action) => {
  let {type, payload} = action;
  console.log(action);
  switch(type) {
      case 'ACTIVE':
          let activeCategory=payload
          let categories = state.categories.map(item => {
              if (item.normalizedName === payload) {
                  return {
                      normalizedName : item.normalizedName, 
                      displayName: item.displayName ,
                      description:item.description}
              }
              return item;
          })
          return { activeCategory,categories};
      case 'RESET':
          return initialState;
      default:
          return state;
  }
}












//actions
export const selectCate = (name) => {
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export default ReduceCategory