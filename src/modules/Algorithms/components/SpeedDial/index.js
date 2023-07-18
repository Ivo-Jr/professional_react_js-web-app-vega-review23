import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DifferenceIcon from '@mui/icons-material/Difference';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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

const actions = [
  { icon: <CameraswitchIcon />, name: 'switch' },
  { icon: <AdsClickIcon />, name: 'trigger' },
  { icon: <DifferenceIcon />, name: 'Acceptable Difference' },
  { icon: <ScreenshotMonitorIcon />, name: 'capture image' },
  { icon: <WorkspacePremiumIcon />, name: 'set quality as default' },
  { icon: <PlagiarismIcon />, name: 'Inspect' },
  { icon: <RocketLaunchIcon />, name: 'Execution' },
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('right');
  const [hidden, setHidden] = React.useState(false);

  // const handleDirectionChange = (event) => {
  //   setDirection(event.target.value);
  // };

  // const handleHiddenChange = (event) => {
  //   setHidden(event.target.checked);
  // };

  return (
    <Box sx={{
      position: 'absolute',
      zIndex: 4,
      top: '2rem',
      left: '1rem',
    }}>
      <WrapperSpeedDial>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </WrapperSpeedDial>
    </Box>
  );
}
