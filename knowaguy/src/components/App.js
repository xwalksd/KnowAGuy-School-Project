
import React from "react";
import {NavigationMenu} from './navbar';
import { Search} from './search';
import {handyMen} from '../handymen';
import { Dashboard } from "./dashboard";
import {Routes, Route} from 'react-router-dom'
import { AddGuy } from "./addguy";


function App() {
  const [yourList, setList] = React.useState([]);
 
const [searchInput, setSearchInput] = React.useState("");
  return (
   <>
   <NavigationMenu/>
    <Routes>
        <Route index path="home" element={<Dashboard  setList = {setList} yourList = {yourList}/>}/>
        <Route path="search" element={<Search setList = {setList} yourList = {yourList}/>}/>
        <Route path="addguy" element={<AddGuy yourList = {yourList}/>}/>
    </Routes>
      
   </>
  );
}

export default App;
