import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import './PopoverWrapper-style.css'
import Card from './Card-component/Card-component'
import Item from '../Item-component/Item'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: 0,
  },
}));

export default function PopoverWrapper({id, name, imgId, description,set}) {
    
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
    <div className="flex-item">
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {<Item
          name={name}
          key={id}
          imgId={id}
          description={description}
          set={set}
        />}
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'top',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
          <Card 
            name={name}
            imgId={imgId}
            description={description}
            set={set}
          />
        </Typography>
      </Popover>
    </div>
  );
}