import React from "react";
import FilterLink from "./FilterLink";
// import PropTypes from 'prop-types';



const Footer = () => (
    <p>
        Show:
        {'  '}
        <FilterLink
            filter='SHOW_ALL'
            children="All"
        />
        {'  '}
        <FilterLink
            filter='SHOW_ACTIVE'
            children="Active"
        />
        {'  '}
        <FilterLink
            filter='SHOW_COMPLETE'
            children="Complete"
        />
    </p>

);

export default Footer;
