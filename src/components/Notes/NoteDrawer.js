import { Box, Grid, styled } from "@mui/material";
import React from "react";
import NewNote from "./NewNote";
import NoteCard from "./NoteCard";
import EmptyNotes from "./EmptyNotes";
import { useSelector } from "react-redux";
import { useCollection } from "react-firebase-hooks/firestore";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const NoteDrawer = () => {
  const query = useSelector(state => state?.notes?.query); 
  const [docs] = useCollection(query);
  const noteList = docs?.docs;
  return (
    <Box sx={{ display: "flex", margin: "auto" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <NewNote />
        {noteList?.length > 0 ? (
          <Grid container style={{ marginTop: "10px" }}>
            {noteList?.map((note) => (
              <Grid item key= {note.id}> 
                <NoteCard note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default NoteDrawer;
