import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosBooks, { API_KEY, USER_ID } from '../apis/books';

// * Initial state object
const initialState = {
  books: [],
  selectedBook: {
    kind: 'books#volume',
    id: 'oT5hDwAAQBAJ',
    etag: 'pJXl05bXy4Q',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/oT5hDwAAQBAJ',
    volumeInfo: {
      title: 'Zen and Japanese Culture',
      authors: ['Daisetz T. Suzuki'],
      publisher: 'Princeton University Press',
      publishedDate: '2019-02-12',
      description:
        'Zen and Japanese Culture is a classic that has influenced generations of readers and played a major role in shaping conceptions of Zen’s influence on Japanese traditional arts. In simple and poetic language, Daisetz Suzuki describes Zen and its ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9780691184500',
        },
        {
          type: 'ISBN_10',
          identifier: '069118450X',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 608,
      printType: 'BOOK',
      categories: ['Philosophy'],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.2.2.0.preview.1',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=oT5hDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=oT5hDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      previewLink:
        'http://books.google.ca/books?id=oT5hDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink: 'https://play.google.com/store/books/details?id=oT5hDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink: 'https://play.google.com/store/books/details?id=oT5hDwAAQBAJ',
    },
    saleInfo: {
      country: 'CA',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 33.99,
        currencyCode: 'CAD',
      },
      retailPrice: {
        amount: 20.79,
        currencyCode: 'CAD',
      },
      buyLink:
        'https://play.google.com/store/books/details?id=oT5hDwAAQBAJ&rdid=book-oT5hDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 33990000,
            currencyCode: 'CAD',
          },
          retailPrice: {
            amountInMicros: 20790000,
            currencyCode: 'CAD',
          },
          giftable: true,
        },
      ],
    },
    accessInfo: {
      country: 'CA',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.ca/books/download/Zen_and_Japanese_Culture-sample-pdf.acsm?id=oT5hDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=oT5hDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
  },
  status: 'idle',
  error: null,
};

// * async thunk for fetching books from Google
export const fetchBooks = createAsyncThunk('redux/fetchBooks', async (id) => {
  try {
    const response = await axiosBooks.get(`${USER_ID}/bookshelves/${id}/volumes?key=${API_KEY}`, {
      params: { maxResults: 40 },
    });
    return response.data.items;
  } catch (err) {
    return err.message;
  }
});

// * books slice
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    select: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { select } = booksSlice.actions;
export default booksSlice.reducer;
