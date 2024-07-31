import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import  LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { useSelector } from "react-redux";
import { useCollection } from "react-firebase-hooks/firestore";
import { v4 as uuid } from 'uuid';
import FolderIcon from '@mui/icons-material/Folder';

const NavList = ({setIsRenderFilteredNotes, setFilteredNotes}) => {

  const query = useSelector(state => state?.notes?.query); 
  const [docs] = useCollection(query);
  const noteList = docs?.docs;

  const filterNotesByFolderName = folderName => {
    if(folderName !== "Notes"){
      setIsRenderFilteredNotes(true)
    const filteredNotes = noteList?.filter( note => note.data().folderName === folderName);
    setFilteredNotes(filteredNotes);
    }
    else{
      setIsRenderFilteredNotes(false)
    } 
  }

  const folderNames = noteList?.map( note => note.data().folderName);
  let uniqueFolderNames = [...new Set(folderNames)];

  const buildFolderNameObject = uniqueFolderNames?.map (folderName =>  ({
    id: uuid(),  
    name: folderName, 
    icon: <FolderIcon />
  }));

  const navList = [
    { id: uuid(), name: "Notes", icon: <LightbulbOutlinedIcon /> },
  ];

  const listOfFolders = [...navList, ...buildFolderNameObject]
  return (
    <List>
      {listOfFolders?.map((list) => (
        <ListItem button key={list.id} onClick={() => filterNotesByFolderName(list.name)}>
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
