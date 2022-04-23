import React, { useState, useCallback } from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import ImgsViewer from "react-images-viewer";

export default class ReviewGallery extends React.Component {
  render() {
    return (
      <ImgsViewer
        imgs={[product1, product2, product3, product4, product5]}
        currImg={this.state.currImg}
        isOpen={this.state.viewerIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeViewer}
      />
    );
  }
}
