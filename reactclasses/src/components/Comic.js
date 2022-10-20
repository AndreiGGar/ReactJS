import { Component } from "react";

class Comic extends Component {

  render() {
    return (
      <div>
        <h4>Name: {this.props.comic.titulo}</h4>
        <h4>Description: {this.props.comic.descripcion}</h4>
        <img src={this.props.comic.imagen} alt="" style={{width: "150px", height:"150px"}}></img>
        <br/><br/>
        <button type="button" onClick={() => {
          this.props.favoriteComic(this.props.comic)
        }}>
          Select as favorite
        </button>
        <button type="button" onClick={() => {
          var index = parseInt(this.props.index);
          this.props.deleteComic(index);
        }}>
          Delete comic
        </button>
      </div>
    );
  }
}

export default Comic;
