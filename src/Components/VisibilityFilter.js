import React from 'react';
import { connect } from 'react-redux';

import {SetFilter} from '../redux/actions'
import {Filters} from '../redux/actionTypes'

function VisibilityFilter({activeFilter, SetFilter}) {
  return (
    Filters.map((filter, i) => (
      <button
        className={filter === activeFilter ? 'active' : ''}
        onClick={() => SetFilter(filter)}
        key={`filter-${i}`}
      >
        {filter}
      </button>)
    ) 
  )
}

const mapState = (state) => ({ activeFilter: state.VisibilityFilter.activeFilter })
export default connect(mapState, {SetFilter})(VisibilityFilter)