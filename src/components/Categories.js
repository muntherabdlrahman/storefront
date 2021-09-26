import {reset,selectCate} from '../store/data'
import {connect} from 'react-redux';
const Categories = props => {
    return (
        <section>
            <ul>
            {props.categories.map((categorie, idx) =>
                <li key={idx} onClick={()=>props.selectCate(categorie.normalizedName)}>{categorie.normalizedName}  </li>
            )}
            </ul>
        </section>
    )
}

const mapStateToProps = (state) => {
    console.log('STATE???', state);
    console.log('STATE???', state.ReduceCategory);
    return  state.ReduceCategory;
  };

const mapDispatchToProps = {selectCate, reset};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);