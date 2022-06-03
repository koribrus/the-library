import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import Header from './Header';
import Shelves from './Shelves';
import BookList from './BookList';
import BookDetail from './BookDetail';
import BookViewer from './BookViewer';
import './App.css';

const App = () => {
  const { selectedBook } = useSelector((state) => state.books);

  return (
    <div>
      <Header />
      <div className='app'>
        <div className='container grid'>
          <div className='column column-left'>
            <div className='column-insert'>
              <div className='book-detail'>
                <BookDetail book={selectedBook} />
              </div>
              <div className='book-selection'>
                <BookList />
                <Shelves />
              </div>
            </div>
          </div>
          <div className='column book-view'>
            <BookViewer />
          </div>
        </div>
      </div>
      {/* <div className='ui vertical divider'></div> */}
    </div>
  );
};

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <div className='app'>
//           <div className='container grid'>
//             <div className='column column-left'>
//               <div className='column-insert'>
//                 <div className='book-detail'>
//                   {/* <BookDetail book={this.props.selectedBook} /> */}
//                 </div>
//                 <div className='book-selection'>
//                   {/* <BookList /> */}
//                   {/* <Shelves /> */}
//                 </div>
//               </div>
//             </div>
//             <div className='column book-view'>
//               <BookViewer />
//             </div>
//           </div>
//         </div>
//         {/* <div className='ui vertical divider'></div> */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     selectedBook: state.selectedBook,
//   };
// };

// export default connect(mapStateToProps)(App);
