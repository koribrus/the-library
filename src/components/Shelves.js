import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShelfButton from './ShelfButton';
import { fetchBooks } from '../redux/books';

// * old redux store
// import { fetchBooks } from '../actions';
// import { connect } from 'react-redux';

import './Shelves.css';

const Shelves = () => {
  const { shelves } = useSelector((state) => state.shelves);
  const dispatch = useDispatch();

  const onButtonClick = (e, id) => {
    console.log('click');
    dispatch(fetchBooks(id));
  };

  const renderButtons = () => {
    const buttons = shelves.map((shelf) => {
      return (
        <ShelfButton
          key={shelf.id}
          name={shelf.name}
          onButtonClick={(e) => onButtonClick(e, shelf.id)}
        />
      );
    });

    return buttons;
  };

  return <div className='shelves'>{renderButtons()}</div>;
  // return <div className='shelves'>Shelves</div>;
};

export default Shelves;

// class Shelves extends React.Component {
//   onButtonClick = (e, id) => {
//     this.props.fetchBooks(id);
//   };

//   renderButtons = () => {
//     const buttons = this.props.shelves.map((shelf) => {
//       return (
//         <ShelfButton
//           key={shelf.id}
//           name={shelf.name}
//           onButtonClick={(e) => this.onButtonClick(e, shelf.id)}
//         />
//       );
//     });

//     return buttons;
//   };

//   render() {
//     return <div className='shelves'>{this.renderButtons()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     shelves: state.shelves,
//     books: state.books,
//   };
// };

// export default connect(mapStateToProps, { fetchBooks })(Shelves);
