import React from 'react';
import { connect } from 'react-redux';

class BookViewer extends React.Component {
  renderViewer = () => {
    if (!this.props.selectedBook) return '';

    return (
      <iframe
        title='preview'
        style={{ border: '0px' }}
        src={`https://books.google.ca/books?id=${this.props.selectedBook.id}&newbks=0&pg=PP1&output=embed`}
        width='384'
        height='575'
        frameBorder='0'
        scrolling='no'
      ></iframe>
    );
  };

  render() {
    return <div className='book-viewer'>{this.renderViewer()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook,
  };
};
export default connect(mapStateToProps)(BookViewer);
