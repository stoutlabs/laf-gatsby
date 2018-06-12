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
      //console.log("this.props.images", this.props.images);

      const newImages = this.props.images.map(({ picture }, index) => {
         return picture.localFile.childImageSharp;
      });

      const newThumbs = this.props.thumbs.map(({ picture }, index) => {
         return picture.localFile.childImageSharp;
      });

      this.setState(() => {
         return {
            data: this.props.images,
            images: newImages,
            thumbs: newThumbs,
            imageCount: newImages.length,
            content: this.props.content,
            imagesLoaded: true,
            activeImage: newImages[0]
         };
      });
   };

   componentDidUpdate = (prevProps, prevState) => {
      if (prevState.imagesLoaded !== this.state.imagesLoaded) {
         console.log("all images loaded.");
         this.handleThumbClick(this.state.images[0].id);
      }
   };

   handleThumbClick = val => {
      console.log("thumbClick", val);
      this.handleNewActive(val);
   };

   // handleImageLoad = image => {
   //    this.setState(prevState => {
   //       return { images: prevState.images.concat(image), loadCount: prevState.loadCount + 1 };
   //    });
   // };

   handleNewActive = id => {
      const newActiveImage = this.state.images.filter(img => {
         return img.id === id;
      })[0];
      this.setState(() => {
         return { activeImage: newActiveImage };
      });
   };

   // renderInvisPreloader = () => {
   //    return (
   //       <div className="preloader-invis">
   //          {this.state.data &&
   //             this.state.data.map((image, index) => {
   //                return (
   //                   <img
   //                      srcSet={image.srcSet}
   //                      src={image.src}
   //                      onLoad={() => {
   //                         this.handleImageLoad(image);
   //                      }}
   //                      key={image.id}
   //                      alt=""
   //                   />
   //                );
   //             })}
   //       </div>
   //    );
   // };

   render() {
      let content = this.state.content;

      return (
         <div className="gallery-grid">
            <div className="labels has-text-centered">
               <InfoPanel
                  content={this.state.content}
                  title={this.state.content ? this.state.content.title : "Loading..."}
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
