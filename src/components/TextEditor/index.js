import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ContentContainer,
  TextEditorImageCard,
  TextEditorHeading,
  TextEditorImage,
  TextEditorCard,
  ButtonListContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponent'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBoldBtn = () => {
    const {isBold} = this.state
    this.setState({isBold: !isBold})
  }

  onClickItalicBtn = () => {
    const {isItalic} = this.state
    this.setState({isItalic: !isItalic})
  }

  onClickUnderlineBtn = () => {
    const {isUnderline} = this.state
    this.setState({isUnderline: !isUnderline})
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <AppContainer>
        <ContentContainer>
          <TextEditorImageCard>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImageCard>
          <TextEditorCard>
            <ButtonListContainer>
              <li>
                <BoldButton
                  data-testid="bold"
                  onClick={this.onClickBoldBtn}
                  isBold={isBold}
                >
                  <VscBold size={16} />
                </BoldButton>
              </li>

              <li>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onClickItalicBtn}
                  isItalic={isItalic}
                >
                  <GoItalic size={16} />
                </ItalicButton>
              </li>

              <li>
                <UnderlineButton
                  data-testid="underline"
                  onClick={this.onClickUnderlineBtn}
                  isUnderline={isUnderline}
                >
                  <AiOutlineUnderline size={16} />
                </UnderlineButton>
              </li>
            </ButtonListContainer>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </TextEditorCard>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
