import React, { useEffect, useRef, useState } from "react";
import { Box, TextField, styled } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useDispatch, useSelector } from "react-redux";
import { useCollection } from "react-firebase-hooks/firestore";
import { modules, formats, placeholder } from "../../constants/newNoteConstants"
import { addNoteFunction } from "../../redux/actionCreators/noteCardActionCreator";

const StyleBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 200px;
  margin: auto;
`

const NewNote = () => {

  const query = useSelector(state => state?.notes?.query); 
  const newNoteInitialState = useSelector(state => state?.newNote); 
  const [docs] = useCollection(query);
  const { quill, quillRef } = useQuill({ modules, formats, placeholder });
  const [showNoteField, setShowNoteField] = useState(false);
  const [addNote, setAddNote] = useState(newNoteInitialState);
  const containerRef = useRef();
  const dispatch = useDispatch();

  const onTextAreaClick = () => {
    setShowNoteField(true);
    containerRef.current.style.height = "300px";
  };

  const handleClickAway = async () => {
    setShowNoteField(false);
    containerRef.current.style.height = "200px";
    const updatedNote = {...addNote};
    
    if(updatedNote.title && updatedNote.description){
      dispatch(addNoteFunction(docs, updatedNote, query));
    }
   
    setAddNote({...addNote, title : "", description : "", category: "", folderName: ""});
  };

  const onTextChange = e => {
    let changedNote = {...addNote, [e.target.name]: e.target.value};
    setAddNote(changedNote);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        let changedNote = {...addNote, description: quillRef.current.firstChild.innerHTML};
        setAddNote(changedNote);
      });
    }
  }, [quill, addNote, quillRef]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <StyleBox ref={containerRef}>
        { showNoteField && 
        <>
        <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange = { e => onTextChange(e)}
            name = "title"
            value={addNote?.title}
          />
        <TextField
            placeholder="Category"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange = { e => onTextChange(e)}
            name = "category"
            value={addNote?.category}
          />
          <TextField
            placeholder="FolderName"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange = { e => onTextChange(e)}
            name = "folderName"
            value={addNote?.folderName}
          />
        </>
        }
        <div style={{ width: 600, height: 100 }} >
            <div ref={quillRef} onClick={onTextAreaClick} style={{ marginBottom: 10 }}></div>
        </div>
      </StyleBox>
    </ClickAwayListener>
  );
};

export default NewNote;
