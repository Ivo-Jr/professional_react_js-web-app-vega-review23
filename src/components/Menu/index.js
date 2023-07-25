import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MenuListComposition() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon sx={{ width: "2.5rem", height: "2.5rem", color: "white" }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{
                      "a": {
                        textDecoration: "none",
                        color: "#333",
                      },

                      "li": {
                        fontSize: "1.2rem"
                      }
                    }}
                  >
                    <a href="/">
                      <MenuItem onClick={handleClose}>
                        Home
                      </MenuItem>
                    </a>
                    <Link to="/technology">
                      <MenuItem onClick={handleClose}>
                        Tecnology
                      </MenuItem>
                    </Link>
                    <Link to="/engineering">
                      <MenuItem onClick={handleClose}>
                        Engineering
                      </MenuItem>
                    </Link>
                    <Link to="/algorithms">
                      <MenuItem onClick={handleClose}>
                        Algorithms
                      </MenuItem>
                    </Link>
                    <Link to="/articles">
                      <MenuItem onClick={handleClose}>
                        Articles
                      </MenuItem>
                    </Link>
                    <Link to="/budget">
                      <MenuItem onClick={handleClose}>
                        Contact
                      </MenuItem>
                    </Link>
                    <Link to="/forms">
                      <MenuItem onClick={handleClose}>
                        Forms
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}