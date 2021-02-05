import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Button, Card, Container, List, CardHeader, CardContent, TextField } from '@material-ui/core'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Accordion from './Accordion/Accordion'
import ContentOne from './Accordion/Content'
import ContentTwo from './Accordion/ContentTwo'

/** DISPLAY THE DROPDOWN WITH ACCORDION COMPONENT */

const StyledButton = styled(Button)`
    background-color: white; 
    color: grey; 
    width: 30vw;
    text-transform: initial;  
`;
const StyledContainer = styled(Container)`
    position: absolute;
    display: block; 
    width: 50px;
    height: 80px; 
    background-color: red; 
`
const StyledSearch = styled(({ ...rest }) => (
  <TextField classes={{ underline: 'underline', root: 'root' }} {...rest} />
))`
  width: 100%; 
  &:underline{
      
      &:before {
          border-bottom: 0;
          transition: 0;  
      }
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 0; 
  &:last-child {
      padding: 0; 
  }
`

const StyledCardHeader = styled(CardHeader)`
  padding: 0; 
`;

const StyledList = styled(({ ...rest }) => (
  <List classes={{ padding: 'padding', root: 'root' }} {...rest} />
))`
   width: 30vw;
  // height: 20vw;
  //background-color : red; 
  padding-bottom: 0;  
  .padding{
      padding: 0; 
  }  
`;
export default function ProjectSelector() {
  const [display, setDisplay] = useState(false);
  const [displayPanel, setDisplayPanel] = useState(false);
  const ref = useRef();
  
  const handleClick = () => {
    setDisplay(true);
  };

  useOnClickOutside(ref, () => setDisplay(false));

  const handleClickPanel = () => {
    setDisplayPanel(false); 
  }

  return (
    <div>
      <StyledButton variant="outlined" color="primary" onClick={handleClick} >
        Select Project
    </StyledButton>
      {/* Displaying dropdown */}
      {display && (
        <div style={{ position: 'absolute', display: 'block', marginTop: 10, width: '30vw' }} ref={ref}>
          <Card >
            <StyledSearch
              placeholder="Search Project"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }} />
            {/* Add new <Accordion/> Component if you want more parts */}
              <Accordion
                onClick={handleClickPanel}
                title="Head Office"
                content={<ContentOne />}
                display= {displayPanel}
              />
            <Accordion
              onClick={handleClickPanel}
              title="Tokyo"
              content={<ContentTwo />}
              display={!displayPanel}
            />
          </Card>
        </div>
      )}
    </div>
  )

}

// Function for close on click outside Dropdown
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}