import React, {useState,useRef,useEffect} from "react";
import styles from "./Search.module.css"
const Search = ({getSearchTerm}) => {
   const [input, setInput] = useState("");
   const inputRef  = useRef();
 const searchSubmitHandler = (event) => {
        event.preventDefault();
        // if(input.trim() !== ""){
        //   getSearchTerm(input);
        // }
      
        // setInput("")
        const input= inputRef.current
        if(input.value.trim()!==""){
        getSearchTerm(input.value)
        } 
        input.value = "";
    }
    useEffect(() =>  {
      console.log(inputRef);
      inputRef.current.focus();
    },
    [])
    
  return (
    <form onSubmit={searchSubmitHandler} className={styles.search}>
        <input type="search"  ref={inputRef}
        //  value={input} 
          onChange={(e)=> 
          setInput(e.target.value)
          }></input>
       <button>
       <span> </span>
	<span> </span>
	<span> </span>
	<span> </span>
        Search
        </button> </form>
  )
}

export default Search