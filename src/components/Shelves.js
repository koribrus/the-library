import React from 'react';
import { connect } from 'react-redux';
import ShelfButton from './ShelfButton';
import { fetchBooks } from '../actions';
import './Shelves.css';

class Shelves extends React.Component {
  onButtonClick = (e, id) => {
    this.props.fetchBooks(id);
  };

  renderButtons = () => {
    const buttons = this.props.shelves.map((shelf) => {
      return (
        <ShelfButton
          key={shelf.id}
          name={shelf.name}
          onButtonClick={(e) => this.onButtonClick(e, shelf.id)}
        />
      );
    });

    return buttons;
  };

  render() {
    return <div className='shelves'>{this.renderButtons()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    shelves: state.shelves,
    books: state.books,
  };
};

export default connect(mapStateToProps, { fetchBooks })(Shelves);
