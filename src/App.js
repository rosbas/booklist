import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/booklist';
import NewBookForm from './components/bookform';

function App() {
	return (
		<div className="App">
			<BookContextProvider>
				<Navbar />
				<BookList />
				<NewBookForm />
			</BookContextProvider>
		</div>
	);
}

export default App;
