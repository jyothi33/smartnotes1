import SwipeDrawer from "./SwipeDrawer";
import NoteDrawer from "./Notes/NoteDrawer";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {getNotesFunction} from "../redux/actionCreators/noteActionCreator";
import FilteredNotes from "./Notes/FilteredNotes";

const Home = () => {

  const [isRenderFilteredNotes, setIsRenderFilteredNotes] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getNotesFunction())
    }, [dispatch]);

  return (
    <Box style={{display : 'flex', width: '100%'}}>
      <SwipeDrawer setIsRenderFilteredNotes={setIsRenderFilteredNotes} setFilteredNotes={setFilteredNotes}/>
      {isRenderFilteredNotes ? <FilteredNotes filteredNotes={filteredNotes}/> : <NoteDrawer />}
    </Box>
  );
};

export default Home;
