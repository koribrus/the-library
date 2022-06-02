// ! this is a trial component using the Google Books Embedded Reader API that is not functional. See BooksViewer.js for the component using the simple Preview Wizard to display book content.

import React from 'react';

class BookReader extends React.Component {
  constructor(props) {
    super(props);
    this.bookReaderRef = React.createRef();

    this.state = {
      seeViewer: null,
      scriptLoaded: null,
    };
  }

  // componentDidMount() {}

  componentDidMount() {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.google.com/books/jsapi.js';
    scriptTag.addEventListener('load', () => this.setState({ scriptLoaded: true }));
    scriptTag.id = 'google-script';
    document.body.appendChild(scriptTag);

    // if (window.viewer) {
    //   console.log('Viewer loaded');
    // } else {
    //   console.log('Viewer needed');
    //   window.google.books.load();
    //   console.log('load() function has run');
    //   console.log(this.bookReaderRef.current);

    //   window.google.books.setOnLoadCallback(() => {
    //     let viewer = new window.google.books.DefaultViewer(this.bookReaderRef.current);
    //     this.setState({ seeViewer: viewer });
    //     window.viewer = viewer;
    //     viewer.load('WbGDfPB2ugoC');
    //     console.log('test');
    //   });
    // }
    this.loadViewer();
  }

  loadViewer = () => {
    if (!this.state.scriptLoaded) return;

    if (this.state.scriptLoaded) {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(this.bookReaderRef.current);
        viewer.load('WbGDfPB2ugoC');
      }
    } else {
      window.google.books.load();
      window.google.books.setOnLoadCallback(() => {
        let viewer = new window.google.books.DefaultViewer(this.bookReaderRef.current);
        window.viewer = viewer;
        viewer.load('WbGDfPB2ugoC');
      });
    }
  };

  render() {
    return (
      <div>
        <div>Book Reader</div>
        <div
          ref={this.bookReaderRef}
          id='viewerCanvas'
          style={{ width: '320px', height: '500px', backgroundColor: 'red' }}
        ></div>
      </div>
    );
  }
}

export default BookReader;
