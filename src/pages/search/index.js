import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { URL } from 'src/common/constant';
import SearchIcon from 'src/images/search.png';
import { Wrapper } from './styled';
import { loadAnswers, loadRestaurants } from './widgets';

class Search extends React.PureComponent {
  state = {
    keyword: '',
    answers: [],
    restaurants: [],
  };

  static defaultProps = {
    loadAnswers: PropTypes.func.isRequired,
    loadRestaurants: PropTypes.func.isRequired,
  };

  componentWillMount = () => {
    this.timerId = null;
  };

  handleSearch = value => {
    const { loadAnswers, loadRestaurants } = this.props;
    return Promise.all([
      loadAnswers({
        url: `${URL.ANSWERS}?q=${value}`,
      }),
      loadRestaurants({
        url: `${URL.RESTAURANTS}?q=${value}`,
      }),
    ]).then(([answers, restaurants]) => {
      if (value) {
        this.setState({ answers, restaurants });
      } else {
        this.setState({ answers: [], restaurants: [] });
      }
    });
  };

  handleKeyword = e => {
    const { value } = e.target;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.setState({ keyword: value });
    this.timerId = setTimeout(() => this.handleSearch(value), 700);
  };

  renderSearchBox = () => {
    const { keyword } = this.state;
    return (
      <div className="SearchBox">
        <input
          type="text"
          onChange={this.handleKeyword}
          value={keyword}
          placeholder="Enter keywords here"
        />
        <img src={SearchIcon} alt="search icon" />
      </div>
    );
  };

  // TODO: separated to component
  renderResultItem = (data, noThumb) => {
    return (
      <div className="Section">
        {data.map(a => (
          <a key={a.key} className="ResItem" href="detail" target="_blank">
            {!noThumb && <img src="https://via.placeholder.com/150" alt="" />}
            <div className="ResInfo">
              <div>{a.title}</div>
              <div>{a.subtitle}</div>
            </div>
          </a>
        ))}
      </div>
    );
  };

  renderRestaurants = () => {
    const { restaurants } = this.state;
    if (!restaurants.length) {
      return null;
    }
    const data = restaurants.map(i => ({
      ...i,
      subtitle: i.address,
      key: i.title,
    }));
    return this.renderResultItem(data);
  };

  renderAnswers = () => {
    const answers = this.state.answers.filter(i => i.answer);
    if (!answers.length) {
      return null;
    }
    const data = answers.map(i => ({
      ...i,
      subtitle: i.answer,
      key: i.title,
    }));
    return this.renderResultItem(data);
  };

  renderSuggestion = () => {
    const answers = this.state.answers.filter(i => !i.answer);
    if (!answers.length) {
      return null;
    }
    const data = answers.map(i => ({
      ...i,
      key: i.title,
    }));
    return this.renderResultItem(data, true);
  };

  render() {
    return (
      <Wrapper>
        {this.renderSearchBox()}
        <div className="Results">
          {this.renderRestaurants()}
          {this.renderAnswers()}
          {this.renderSuggestion()}
        </div>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { loadAnswers, loadRestaurants }
)(Search);
