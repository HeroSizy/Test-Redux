import React from "react";
import {connect} from "react-redux";
import Link from "./component/Link";
import {setVisibilityFilter} from "./Actions";


const mapStateToLinkProps = (state,
                             ownProps) => {
    return {
        active: (ownProps.filter === state.visibilityFilter),
        children: ownProps.children
    }
};

const mapDispatchToLinkProps = (dispatch,
                                ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};



const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps,
)(Link);

export default FilterLink;
