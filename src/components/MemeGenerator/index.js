import {Component} from 'react'
import {
  AppContainer,
  Heading,
  MemeContainer,
  InputLabel,
  InputType,
  Form,
  Select,
  CustomButton,
  ImageContainer,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isGenerated: false,
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({isGenerated: true})
  }

  renderImage = () => {
    const {url, topText, bottomText, fontSize} = this.state

    return (
      <ImageContainer
        backgroundImage={url}
        fontSize={fontSize}
        data-testid="meme"
      >
        <Para>{topText}</Para>
        <Para>{bottomText}</Para>
      </ImageContainer>
    )
  }

  render() {
    const {url, topText, bottomText, isGenerated, fontSize} = this.state
    return (
      <AppContainer>
        <MemeContainer>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.onSubmitForm}>
            <InputLabel htmlFor="url">Image URL</InputLabel>
            <InputType
              type="text"
              placeholder="Enter the Image URL"
              onChange={this.onChangeUrl}
              id="url"
              value={url}
            />
            <InputLabel htmlFor="top">Top Text</InputLabel>
            <InputType
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              id="top"
              value={topText}
            />
            <InputLabel htmlFor="bottom">Bottom Text</InputLabel>
            <InputType
              type="text"
              placeholder="Enter the Botttom Text"
              onChange={this.onChangeBottomText}
              id="bottom"
              value={bottomText}
            />
            <InputLabel htmlFor="font">Font Size</InputLabel>
            <Select id="font" onChange={this.onChangeFontSize} value={fontSize}>
              {fontSizesOptionsList.map(eachSize => (
                <option key={eachSize.optionId} value={eachSize.displayText}>
                  {eachSize.displayText}
                </option>
              ))}
            </Select>
            <CustomButton type="submit">Generate</CustomButton>
          </Form>
        </MemeContainer>
        <div>{isGenerated && this.renderImage()}</div>
      </AppContainer>
    )
  }
}

export default MemeGenerator
