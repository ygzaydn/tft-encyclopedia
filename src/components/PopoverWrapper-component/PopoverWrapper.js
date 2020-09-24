import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import './PopoverWrapper-style.css'
import ItemCard from './ItemCard-component/ItemCard'
import GalaxyCard from './GalaxyCard-component/GalaxyCard'
import Item from '../Item-component/Item'
import Galaxy from '../Galaxy-component/Galaxy'


const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function PopoverWrapper({ keyId, galaxy, item ,id, name, imgId, description, set }) {
    
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
        className={classes.button}
      >
        {item===true 
        ? <Item
          name={name}
          key={id}
          imgId={id}
          description={description}
          set={set} />
        : null}

        {galaxy===true
        ? <Galaxy
          name={name}
          key={keyId}
          description={description}
          imgId={imgId} />
        : null}
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

          {item===true 
            ?<ItemCard 
            name={name}
            imgId={imgId}
            description={description}
            set={set} />
          : null}

          {galaxy===true
          ? <GalaxyCard 
            name={name}
            imgId={imgId}
            description={description} />
          : null}

        </Typography>
      </Popover>
    </div>
  );
}