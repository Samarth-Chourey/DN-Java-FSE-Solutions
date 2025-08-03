import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

function App() {
  return (
    <div className="container">
      <div className="column">
        <CourseDetails />
      </div>
      <div className="column with-border">
        <BookDetails books={books} />
      </div>
      <div className="column with-border">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
