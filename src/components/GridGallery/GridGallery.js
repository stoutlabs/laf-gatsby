import React, { Component } from "react";

import InfoPanel from "./InfoPanel";
import MainPicContainer from "./MainPicContainer";
import Thumbs from "./Thumbs";

export class GridGallery extends Component {
  state = {
    data: [],
    images: [],
    content: null,
    activeImage: null,
    imagesLoaded: false,
    imageCount: -1,
    loadCount: 0,
    viewingRooms: false
  };

  componentDidMount = () => {
    this.setState(() => {
      return {
        data: this.props.images,
        images: this.props.images,
        thumbs: this.props.thumbs,
        imageCount: this.props.images.length,
        content: this.props.content,
        imagesLoaded: true,
        activeImage: this.props.images[0]
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.imagesLoaded !== this.state.imagesLoaded) {
      this.handleThumbClick(this.state.images[0].id);
    }
  };

  handleThumbClick = val => {
    this.handleNewActive(val);
  };

  handleNewActive = id => {
    const newActiveImage = this.state.images.filter(img => {
      return img.id === id;
    })[0];
    this.setState(() => {
      return { activeImage: newActiveImage };
    });
  };

  render() {
    let content = this.state.content;

    return (
      <div className="gallery-grid">
        <div className="labels has-text-centered">
          <InfoPanel
            content={this.state.content}
            title={this.state.content ? this.state.content.title : "Loading..."}
            label={this.props.label}
          />
        </div>

        <div className="grid-main">
          <div className="gallery-main">
            {this.state.imagesLoaded ? (
              <MainPicContainer item={this.state.activeImage} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        <div className="grid-thumbs has-text-centered">
          {this.state.imagesLoaded ? (
            <Thumbs
              items={this.state.thumbs}
              activeId={this.state.activeImage ? this.state.activeImage.id : ""}
              handleThumbClick={this.handleThumbClick}
            />
          ) : (
            <div>Loading Thumbnails...</div>
          )}
        </div>
      </div>
    );
  }
}

export default GridGallery;
