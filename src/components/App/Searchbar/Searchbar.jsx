import React, { Component } from 'react';
import { Input, SearchBtn, InputContainer } from './Searchbar.styled';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
        <InputContainer>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit" className="button">
          <FontAwesomeIcon icon={faSearch} />
          </SearchBtn>
          </InputContainer>
        </form>
      </header>
    );
  }
}