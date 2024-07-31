import { LightbulbOutlined as Lightbulb} from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Light = styled(Lightbulb)`
font-size: 120px;
color: #f5f5f5;
`
const Text = styled(Typography)`
font-size: 22px;
color: #80868b;
`

const Container = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20vh;
`

const EmptyNotes = () => {
  return (
    <Container>
        <Light />
        <Text>Notes you add appear here.</Text>
    </Container>
  )
}

export default EmptyNotes