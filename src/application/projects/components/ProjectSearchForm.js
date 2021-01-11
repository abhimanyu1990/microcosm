import React, { Component } from 'react';

import {
    CCol,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CButton,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DropDown from '../../common/DropDown';

export default class ProjectSearchBar extends Component {

    render() {
        return (
            <CRow>
                
                    <CCol>
                        
                            <DropDown name="Project Name" />
                        
                            <DropDown name="Project Status" />
                        
                            <DropDown name="Project Type" />
                       
                            <DropDown name="Project Manager" />
                        
                    </CCol>
                    <CCol className="search-top col-sm-4">
                        <CInputGroup>
                            <CInput id="input1-group2" name="input1-group2" placeholder="Username" />
                            <CInputGroupPrepend>
                                <CButton type="button" color="primary"> Search</CButton>
                            </CInputGroupPrepend>
                        </CInputGroup>
                    </CCol>
                
            </CRow>

        );
    }
}