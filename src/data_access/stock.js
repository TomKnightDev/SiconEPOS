import useEffect from 'react';
import productGroupReducer from '../reducers/productGroupReducer';
import { setProductGroups } from '../actions/productGroup';
import {connect} from 'react-redux';

function GetProductGroups(props) {
  fetch('http://192.168.1.196/Sicon.Sage200.WebAPI/api/Stock/GetProductGroups')
    .then((response) => response.json())
    .then((json) => {
      let prodcutGroups = [];
      for (var i = 0; i < json.length; i++) {
        prodcutGroups.push({
          id: json[i]['ProductGroupID'],
          code: json[i]['Code'],
          items: json[i]['Items'],
        });
      }

      props.setProductGroups(prodcutGroups);
    });
  // .catch((error) => console.error(error))
  // .finally(() => setLoading(false));
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductGroups: (productGroups) => 
        dispatch(setProductGroups(productGroups)),
  };
};

export default connect(mapDispatchToProps)(GetProductGroups);
