import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Heading = styled.h1`
  font-size: 20px;
  color: #35469c;
  padding: 10px;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
`
export const InputLabel = styled.label`
  color: #7e858e;
  font-size: 18px;
  margin-top: 10px;
`
export const InputType = styled.input`
  color: #7e858e;
  font-size: 14px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  margin-top: 5px;
  height: 25px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
`
export const Select = styled.select`
  color: #7e858e;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  background-color: transparent;
  height: 25px;
`
export const CustomButton = styled.button`
  color: #ffffff;
  padding: 10px;
  text-align: center;
  background-color: #0b69ff;
  border-radius: 5px;
  border: 0px none;
  margin-top: 10px;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  height: 400px;
  width: 400px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.fontSize}px;
  background-size: cover;
  text-align: center;
`
export const Para = styled.p`
  font-size: ${props => props.fontSize}px;
`
