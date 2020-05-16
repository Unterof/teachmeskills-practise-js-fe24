import {connect} from 'react-redux';

import CategoryList from "../components/CategoryList";

const mapStateToProps = state => {
  return {
    items: state.library.categories,
    fetchCategoryError: state.library.fetchCategoryError,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: (page) => dispatch({
      type: 'LIBRARY/FETCH_CATEGORIES',
      payload: {
        page,
      }
    }),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryList);