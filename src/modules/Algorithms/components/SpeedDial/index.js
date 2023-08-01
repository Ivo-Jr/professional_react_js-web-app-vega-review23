import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import { WrapperSpeedDial } from './styles';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(6),
    left: theme.spacing(2),
  },
}));

export default function PlaygroundSpeedDial({ actionObject }) {
  const direction = 'right';
  const hidden = false;

  return (
    <Box sx={{
      position: 'absolute',
      zIndex: 4,
      top: '2rem',
      left: '.8rem',
    }}>
      <WrapperSpeedDial>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actionObject.map((action) => (
            <SpeedDialAction
              key={action.button}
              icon={action.icon}
              tooltipTitle={action.button}
              onClick={action.actionButton}
              sx={{
                '@media (max-width: 499px)': {
                  width: '36px',
                  padding: '0px',
                  margin: '3px',
                }
              }}
            />
          ))}
        </StyledSpeedDial>
      </WrapperSpeedDial>
    </Box>
  );
}
