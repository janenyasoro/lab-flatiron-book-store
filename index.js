const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// 1. Update the Header (Passes Test 1)
// Select the h1 element with id="header" and set its text to the store name
const header = document.querySelector('#header');
header.textContent = bookStore.name;

// 2. Populate the Book List (Passes Tests 2, 3, and 4)
// Select the ul element with id="book-list"
const bookList = document.querySelector('#book-list');

// Iterate over the books array inside the bookStore object
bookStore.books.forEach(book => {
    // A. Create the list item <li>
    const li = document.createElement('li');

    // B. Create the Title (h3 or p) and add text
    const title = document.createElement('h3');
    title.textContent = book.title;

    // C. Create the Author (p) and add text
    const author = document.createElement('p');
    author.textContent = book.author;

    // D. Create the Image (img) and set the src
    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = book.title; // Optional but good practice

    // E. Append elements to the list item
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(img);

    // F. Append the list item to the main book list
    bookList.appendChild(li);
});
