import React from "react";
import ImageItem from "./ImageItem"
import  "./ImageList.css"

const ImageList = ({ images }) => {
    return (
        <div className="imagelist">
            {images.map((image) => (
                <ImageItem
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
                />

            ))}
        </div>
    )
}

export default ImageList;