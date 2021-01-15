import {PopoverContainer, PopoverContent} from 'react-popopo'
import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .comPlainTextContentEditable {
    -webkit-user-modify: read-write-plaintext-only;
    min-height:30px;
    max-height:200px;
    width:100%;
    cursor: text;
    padding 10px;
    font-size:14px;
    font-weight:400;
  }

  .comPlainTextContentEditable--has-placeholder::before {
    content: attr(placeholder);
    opacity: 0.5;
    color: inherit;
    cursor: text;
    font-size:14px;
    font-weight:400;
  }

  .react_trello_dragClass {
    transform: rotate(3deg);
  }

  .react_trello_dragLaneClass {
    transform: rotate(3deg);
  }

  .icon-overflow-menu-horizontal:before {
    content: "\\E91F";
  }
  .icon-lg, .icon-sm {
    color: #798d99;
  }
  .icon-lg {
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    width: 32px;
  }
`

export const CustomPopoverContainer = styled(PopoverContainer)`
  position: absolute;
  right: 10px;
  flex-flow: column nowrap;
`

export const CustomPopoverContent = styled(PopoverContent)`
  visibility: hidden;
  margin-top: -5px;
  opacity: 0;
  position: absolute;
  z-index: 10;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease 0ms;
  border-radius: 3px;
  min-width: 7em;
  flex-flow: column nowrap;
  background-color: #fff;
  color: #313131;
  padding: 5px;
  left: 50%;
  transform: translateX(-50%);
  ${props =>
    props.active &&
    `
    visibility: visible;
    opacity: 1;
    transition-delay: 100ms;
  `} &::before {
    visibility: hidden;
  }
  a {
    color: rgba(255, 255, 255, 0.56);
    padding: 0.5em 1em;
    margin: 0;
    text-decoration: none;
    &:hover {
      background-color: #ced2d8 !important;
      color: #313131;
      font-weight:600;
    }
  }
`

export const BoardWrapper = styled.div`
  overflow-y: hidden;
  padding: 5px;
  color: #313131;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`

export const Header = styled.header`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const Section = styled.section`
  background-color: #ced2d8;
  border-radius: 3px;
  margin: 5px 5px;
  position: relative;
  padding: 10px;
  display: inline-flex;
  height: auto;
  max-height: 90%;
  flex-direction: column;
`

export const LaneHeader = styled(Header)`
  margin-bottom: 0px;
  ${props =>
    props.editLaneTitle &&
    css`
      padding: 0px;
      line-height: 30px;
    `} ${props =>
    !props.editLaneTitle &&
    css`
      padding: 0px 5px;
    `};
`

export const LaneFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 10px;
`

export const ScrollableLane = styled.div`
  flex: 1;
  overflow-y: auto;
  min-width: 250px;
  overflow-x: hidden;
  align-self: center;
  max-height: 90vh;
  margin-top: 10px;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  cursor: ${props => (props.draggable ? 'grab' : `auto`)};
  width: 70%;
`

export const RightContent = styled.span`
  width: 38%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`
export const CardWrapper = styled.article`
  border-radius: 3px;
  border: 2px solid #ccc;
  background-color: #fff;
  border-color :#313131;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 300px;
  margin-bottom: 7px;
  min-width: 300px;
`

export const MovableCardWrapper = styled(CardWrapper)`
  &:hover {
    background-color: #f0f0f0;
    color: #313131;
  }
`

export const CardHeader = styled(Header)`
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
  color: #313131;
`

export const CardTitle = styled(Title)`
  font-size: 16px;
  font-weight:500;
`

export const CardRightContent = styled(RightContent)`
  font-size: 14px;
  text-align:left;
  padding-left:20px;
`

export const Detail = styled.div`
border-radius: 3px;
border: 2px solid #ccc;
background-color: #fff;
border-color :#313131;
position: relative;
padding: 10px;
cursor: pointer;
margin-bottom: 7px;
white-space: pre-wrap;
  
 
`

export const Footer = styled.div`
  border-top: 1px solid #eee;
  padding-top: 6px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TagSpan = styled.span`
  padding: 2px 3px;
  border-radius: 3px;
  margin: 2px 5px;
  font-size: 70%;
`

export const AddCardLink = styled.a`
  border-radius: 0 0 3px 3px;
  color: #3399ff !important;
  text-decoration: underline !important;
  display: block;
  padding: 5px 2px;
  margin-top: 10px;
  font-weight:400 !important;
  font-size:16px !important;
  position: relative;
  cursor: pointer;

  &:hover {
    //background-color: #cdd2d4 !important;
    color: #313131 !important;
    font-size:700 !important;
    font-size:16px;
    text-decoration: underline !important;
  }
`

export const LaneTitle = styled.div`
  font-size: 15px;
  width: 268px;
  height: auto;
`

export const LaneSection = styled.section`
  background-color: #ced2d8;
  border-radius: 5px;
  margin: 10px;
  position: relative;
  padding: 10px;
  display: inline-flex;
  height: auto;
  flex-direction: column;
`

export const NewLaneSection = styled(LaneSection)`
  width: 300px;
`

export const NewLaneButtons = styled.div`
  margin-top: 10px;
  height:30px;
  width:150px;
  color : #313131 !important;
`

export const CardForm = styled.div`
 /*  background-color: #e55353;*/
`

export const InlineInput = styled.textarea`
  overflow-x: hidden; /* for Firefox (issue #5) */
  word-wrap: break-word;
  min-height: 35px;
  max-height: 112px; /* optional, but recommended */
  resize: none;
  width: 100%;
  height: 30px;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: left;
  background-color: transparent;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 5px;
  border: 0;
  padding: 0 8px;
  outline: 0;
  ${props =>
    props.border &&
    css`
      &:focus {
        box-shadow: inset 0 0 0 2px #0079bf;
      }
    `} &:focus {
    background-color: white;
  }
`
