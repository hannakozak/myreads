import React, {Component} from 'react';

class BookshelfChanger extends Component {
	
	handleChange = (event) => {
	this.props.changeShelf (this.props.book, event.target.value)
	}
      render() {
        const { book, books } = this.props;
		let currentValue = 'none';
		for (let b of books) {
			if (b.id === book.id) {
			currentValue = b.shelf;
            }
        }
          return (
            <div className="book-shelf-changer">
              <select value={ currentValue } onChange = {this.handleChange} >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Have Read</option>
                <option value="none">None</option>
              </select>
            </div>
          );
      }
}

export default BookshelfChanger;