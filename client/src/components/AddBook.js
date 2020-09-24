import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      authorId: e.target.value,
    });
  }

  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  displayAuthors() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Authors...!!</div>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <form id="add-book" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Book Name:</label>
            <input type="text" onChange={this.onChangeName} />
          </div>

          <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={this.onChangeGenre} />
          </div>

          <div className="field">
            <label>Author:</label>
            <select onChange={this.onChangeAuthor}>
              <option>Select Author</option>
              {this.displayAuthors()}
            </select>
          </div>

          <button>+</button>
        </form>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
