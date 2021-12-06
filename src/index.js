import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Nav from './components/nav';


const books = [{
  id:1,
  img: "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
  tittle: 'The Psychology of Money',
  author: 'Morgan Housel'
},
{
  id:2,
  img: "https://images-eu.ssl-images-amazon.com/images/I/814rCOycUIL._AC_UL200_SR200,200_.jpg",
  tittle: 'Man"s Search For Meaning:',
  author: 'Viktor E Frankl'
},
{
  id:3,
  img: "https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL200_SR200,200_.jpg",
  tittle: 'As a Man Thinketh Paperback',
  author: 'James Allen'
},
{
  id:4,
  img: "https://images-eu.ssl-images-amazon.com/images/I/61Iz2yy2CKL._AC_UL200_SR200,200_.jpg",
  tittle: 'The Monk Who Sold His Ferrari',
  author: 'Robin Sharma'
},


{
  id:5,
  img: "https://images-eu.ssl-images-amazon.com/images/I/81NYuWzsJcS._AC_UL200_SR200,200_.jpg",
  tittle: 'The Richest Man in Babylon',
  author: 'George S. Clason'
},
{
  id:6,
  img: "https://images-eu.ssl-images-amazon.com/images/I/71ePXM6nOdL._AC_UL200_SR200,200_.jpg",
  tittle: 'Indian Polity For Civil Services',
  author: 'M Laxmikanth '
},



{
  id:7,
  img: "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
  tittle: 'The Psychology of Money',
  author: 'Morgan Housel'
},
{
  id:8,
  img: "https://images-eu.ssl-images-amazon.com/images/I/814rCOycUIL._AC_UL200_SR200,200_.jpg",
  tittle: 'Man"s Search For Meaning:',
  author: 'Viktor E Frankl'
},
{
  id:9,
  img: "https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL200_SR200,200_.jpg",
  tittle: 'As a Man Thinketh Paperback',
  author: 'James Allen'
},
]



function BookList() {
  return (
    <div>
      <Nav/>
      
     
    <section className="booklist">{books.map((book) => {
      const { img, tittle, author } = book;
      return<Book key={book.id}{...book}></Book>
    })}
    </section>
    </div>)
   
}

const Book = (props) => {
  const { img, tittle, author } = props;
//attribute, eventhandler
const clickHandler =()=>{
  alert('hello')
}
  return (
  <article className="book">
    <img src={img} />
    <h1>{tittle}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>reference</button>
  </article>
  )

}

ReactDom.render(<BookList />, document.getElementById('root'));