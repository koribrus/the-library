import React from 'react';
import { connect } from 'react-redux';
import BookItem from './BookItem';
import { selectBook } from '../actions';
import './BookList.css';

class BookList extends React.Component {
  onBookSelect = (book) => {
    this.props.selectBook(book);
  };

  renderBooks = () => {
    const renderedBooks = this.props.books.map((book) => (
      <BookItem book={book} key={book.id} onBookSelect={this.onBookSelect} />
    ));

    return renderedBooks;
  };

  render() {
    return <div className='list'>{this.renderBooks()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, { selectBook })(BookList);
