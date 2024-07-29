import styled from 'styled-components'

export const AppContainer = styled.div`
background-color: #25262c;
height: 100vh;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
`

export const ContentContainer = styled.div`
padding: 20px;
background-color: #1b1c22;
display: flex;
justify-content: space-between;
@media screen and (min-width: 768px){
    min-height: 500px;
}
`
export const TextEditorImageCard = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
`

export const TextEditorHeading = styled.h1`
font-family: Roboto;
color: #f8fafc;
font-size: 26px;
text-align: center;
margin-bottom: 60px;
`

export const TextEditorImage = styled.img`
width: 80%;
`

export const TextEditorCard = styled.div`
width: 50%;
`

export const ButtonListContainer = styled.ul`
padding: 10px;
border: 1px solid #cbd5e1;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
background-color: #25262c;
margin-bottom: 0;
list-style-type: none;
display: flex;
align-items: center;
`

export const BoldButton = styled.button`
margin-right: 5px;
cursor: pointer;
color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
background-color: transparent;
border: none;
`
export const ItalicButton = styled.button`
margin-right: 5px;
cursor: pointer;
color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
background-color: transparent;
border: none;
`
export const UnderlineButton = styled.button`
margin-right: 5px;
cursor: pointer;
color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
background-color: transparent;
border: none;
`

export const TextArea = styled.textarea`
height: 80%;
width: 100%;
background-color: #25262c;
outline: none;
color: #f1f5f9;
padding-left: 10px;
padding-top: 10px;
border: 1px solid #cbd5e1;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`

/*
//   export const TextArea = styled.textarea``

*/
