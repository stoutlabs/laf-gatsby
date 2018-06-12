import React, { Component } from "react";

export class Paginator extends Component {
  renderPagination = () => {
    let links = [];
    for (let page = 1; page <= Math.ceil(this.props.totalItems / this.props.itemsPerPage); page++) {
      links.push(
        <a
          key={page}
          onClick={() => this.props.onChange(page)}
          className={this.props.activePage === page ? "active" : ""}
        >
          {page}
        </a>
      );
    }
    return links;
  };

  render() {
    return <div className="paginator">Pages: {this.renderPagination()}</div>;
  }
}

export default Paginator;
