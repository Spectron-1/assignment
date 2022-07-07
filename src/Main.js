import React from "react";
import UsingFetch from "./UseFetch";
 
const Main = () => {
  
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">EntryPage</a></li>
            <li><a href="/contact">ListPage</a></li>
            
          </ul>
          <div className="content">
          <UsingFetch/>
             
          </div>
        </div>
    );
  
};
 
export default Main;