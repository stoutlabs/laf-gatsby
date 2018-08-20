import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import Paginator from "./Paginator";

export class Thumbs extends Component {
  constructor(props) {
    super(props);
    this.state = { thumbcount: 0, activePage: 1, pageHeight: 220, scrollPos: 0 };
    this.scrollDiv = null;
  }

  handlePageClick = pageNum => {
    const scrollPos = -(this.state.pageHeight * (pageNum - 1));
    this.setState(() => {
      return {
        activePage: pageNum,
        scrollPos: scrollPos
      };
    });
  };

  render() {
    return (
      <div className="thumbs">
        <div className="gallery-thumbs" ref={el => (this.scrollDiv = el)}>
          <div
            className="gallery-thumbs-scroll"
            style={{ transform: `translateY(${this.state.scrollPos}px)` }}
          >
            {this.props.items.map(item => {
              return (
                <Thumbnail
                  item={item}
                  key={item.id}
                  handleThumbClick={this.props.handleThumbClick}
                  active={this.props.activeId === item.id}
                />
              );
            })}
          </div>
        </div>
        <Paginator
          activePage={this.state.activePage}
          itemsPerPage={6}
          totalItems={this.props.items.length}
          onChange={this.handlePageClick}
          hideSingle={true}
        />
      </div>
    );
  }
}

export default Thumbs;
