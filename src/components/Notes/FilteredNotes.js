import { Box, Grid, styled } from "@mui/material";
import React from "react";
import NoteCard from "./NoteCard";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const FilteredNotes = ({ filteredNotes }) => {
  return (
    <Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {filteredNotes?.length > 0 && (
          <Grid container>
            {filteredNotes?.map((note) => (
              <Grid item key={note.id}>
                <NoteCard note={note} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default FilteredNotes;
