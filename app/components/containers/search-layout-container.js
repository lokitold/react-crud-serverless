import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;

  if (searchType === 'users') {
    totalResults = store.userState.users.length;
  }
  else if (searchType === 'widgets') {
      totalResults = store.widgetState.widgets.length;
  } else if (searchType === 'todos') {
    totalResults = store.todosState.todos.length;
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
