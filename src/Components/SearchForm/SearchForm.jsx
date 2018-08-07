import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {
    currentSearchValue: '',
    user: null
  }
  
  onChangeHandle = event => {
    const newValue = event.target.value;

    this.setState(_ => ({currentSearchValue: newValue}));
  }

  fetchUser = event => {
    event.preventDefault();

    if(this.state.currentSearchValue) {
      fetch(`https://api.github.com/users/${this.state.currentSearchValue}`)
        .then(response => {
          if(response.status === 200) {
            return response.json();
          }
        })
        .then(json => {
          this.setState(_ => ({user: json}));
        });
    }
  }

  render() {
    return this.props.children({
      user: this.state.user,
      onChangeHandle: this.onChangeHandle,
      fetchUser: this.fetchUser,
      currentSearchValue: this.state.currentSearchValue
    });
  }
}
