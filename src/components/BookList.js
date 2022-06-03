import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { select } from '../redux/books';

// * old redux store
// import { connect } from 'react-redux';
// import { selectBook } from '../actions';

import './BookList.css';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const onBookSelect = (book) => {
    console.log('click');
    dispatch(select(book));
    // * old select book action
    // this.props.selectBook(book);
  };

  const renderBooks = () => {
    const renderedBooks = books.map((book) => (
      <BookItem book={book} key={book.id} onBookSelect={onBookSelect} />
    ));

    return renderedBooks;
  };

  return <div className='list'>{renderBooks()}</div>;
};

export default BookList;

// class BookList extends React.Component {
//   onBookSelect = (book) => {
//     this.props.selectBook(book);
//   };

//   renderBooks = () => {
//     const renderedBooks = this.props.books.map((book) => (
//       <BookItem book={book} key={book.id} onBookSelect={this.onBookSelect} />
//     ));

//     return renderedBooks;
//   };

//   render() {
//     return <div className='list'>{this.renderBooks()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     books: state.books,
//   };
// };

// export default connect(mapStateToProps, { selectBook })(BookList);
