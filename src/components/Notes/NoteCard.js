import React, { useState } from "react";
import { Card, CardActions, CardContent, Typography, styled } from "@mui/material";
import { DeleteOutlineOutlined as Delete, ColorLensOutlined as Paint} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { colorNote, deleteNote } from "../../redux/actionCreators/noteActionCreator";
import { CirclePicker } from "react-color";

const StyleCard = styled(Card)`
  margin: 8px;
  width: 240px;
  box-shadow: none;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`

const NoteCard = ({note}) => {
 
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("white");
  const [isColorBtnClicked, setIsColorBtnClicked] = useState(false);

  const paintNote = () => {
    setIsColorBtnClicked(true);
  }

  const trashNote =  () => {
   dispatch(deleteNote(note.id));
  }

  const onChangeColorComplete = (color) => {
    setIsColorBtnClicked(false);
    setSelectedColor(color);
    dispatch(colorNote(note.id, color));
  }

  return (
    <StyleCard style={{backgroundColor: note.data()?.bgColor, color: note.data().color}}>
        <CardContent>
            <Typography>{note.data().title}</Typography>
            <Typography><p dangerouslySetInnerHTML={{__html:note.data().description}}></p></Typography>
        </CardContent>
        <CardActions>
            <Paint fontSize="small" onClick={() => paintNote()} style={{marginLeft:"auto"}}/>
              {isColorBtnClicked && <CirclePicker color={selectedColor} onChangeComplete={ color => onChangeColorComplete(color.hex)}/>}
            <Delete fontSize="small" onClick={() => trashNote()}/>
        </CardActions>
    </StyleCard>
  );
};

export default NoteCard;
