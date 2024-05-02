/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const typingTimeArray = [15, 30, 60, 120];

export const TimeButtons = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'left',
      }}
    >
      <ButtonGroup
        variant="outlined"
        size="large"
        aria-label="outlined button group"
      >
        {typingTimeArray.map(time => (
          <Button key={time}>
            {time}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

