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
],
activeCategory: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export
const ReduceCategory = (state = initialState, action) => {
  let { type, payload } = action;
  console.log(action);
  switch (type) {
    case "ACTIVE":
        let active=state.categories.filter(item=>{
            return payload===item.normalizedName? item.normalizedName:""
        })
        
      let activeCategory = {
        normalizedName:active[0].normalizedName,
        displayName:active[0].displayName,
        description:active[0].description
      };
      
      let categories = state.categories;

      return { activeCategory, categories };
    default:
      return state;
  }
};

//actions
export const selectCate = (name) => {
  return {
    type: "ACTIVE",
    payload: name,
  };
};


export default ReduceCategory;


