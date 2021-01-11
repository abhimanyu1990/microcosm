import React, {Component} from 'react';

import {
    CDropdownDivider,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle
  } from '@coreui/react'

export default class DropDown extends Component {

    render(props){
        return(
            <CDropdown className="m-2 btn-group btn-dropdown-width">
              <CDropdownToggle color="primary">
                {this.props.name}
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
        );
    }
}