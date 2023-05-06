import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { NavLink } from 'react-router-dom';

export default function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button  {...bindTrigger(popupState)}>
                        categories
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <NavLink to={"/product"}>
                            <MenuItem onClick={popupState.close}>Mobile/Phones</MenuItem>
                        </NavLink>
                        <MenuItem onClick={popupState.close}>Mens</MenuItem>
                        <MenuItem onClick={popupState.close}>Womens</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}