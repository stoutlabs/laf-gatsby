import React, { Component, Fragment } from "react";
import styled from "styled-components";

const PaginatorButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;

export class Paginator extends Component {
  state = { numpages: Math.ceil(this.props.totalItems / this.props.itemsPerPage) };

  renderPagination = () => {
    let links = [];

    for (let page = 1; page <= this.state.numpages; page++) {
      links.push(
        <PaginatorButton
          key={page}
          onClick={() => this.props.onChange(page)}
          className={this.props.activePage === page ? "active" : ""}
        >
          {page}
        </PaginatorButton>
      );
    }
    return links;
  };

  render() {
    return (
      <Fragment>
        {this.state.numpages > 1 ? (
          <div className="paginator">Pages: {this.renderPagination()}</div>
        ) : (
          <div className="paginator" />
        )}
      </Fragment>
    );
  }
}

export default Paginator;
