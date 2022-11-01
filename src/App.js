import React, {useState} from "react";
import Search from "./components/Search";
import {unsplash} from "./api/unsplash";
import ImageList from "./components/ImageList"
import { createPortal } from "react-dom";
import { useEffect } from "react";

const App= () => {
  const [searchTerm, setSearchTerm] = useState("random")
  const [searchImage, setImages] = useState([])
  const getSearchTerm = (term) =>{
    console.log(term);
    setSearchTerm(term)
  };
 
  useEffect(() => {
    const fetchPhotos = async () => {
       const result =  await unsplash.get(`/search/photos?query=${searchTerm}`)

      setImages(result.data.results)
      console.log(result);
    }
      fetchPhotos()
  }, 
  [searchImage]);
  


  useEffect(() => {
    const fetchPhotos = async () => {
      const result =  await unsplash.get("/photos/random?count=30")
      setImages(result.data)

    }
  } 
  )

  return (
    <>
    {
      createPortal(  <Search getSearchTerm={getSearchTerm}/>,
      document.querySelector("#search"))
    }
    
      <ImageList images={searchImage} />
      </>

  );
}

export default App