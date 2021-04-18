import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import RowingRoundedIcon from '@material-ui/icons/RowingRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <div>
        <ListSubheader inset>Accounts</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FaceRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="My profile" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <TrackChangesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Hunting ground" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <RowingRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Activities" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Your groups</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="CSE dept" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="FOSSers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="VAST" />
        </ListItem>
    </div>
);