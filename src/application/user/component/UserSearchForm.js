import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Moment from 'react-moment';
import moment from 'moment';

import {
    CCol,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CButton,
    CRow,
    CFormGroup,
    CLabel
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import DropDown from '../../common/DropDown';


export default class UserSearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        }
    }
    handleEvent(event, picker) {
        console.log("start date", picker.startDate);
    }
    handleCallback(start, end, label) {
        console.log(start, end, label);
    }
    render() {


        return (
            <div>
                <CRow>

                    <CCol>

                        <DropDown name="Designation" />

                        <DropDown name="Deployment" />

                        <DropDown name="Department" />

                        <DropDown name="Status" />

                        <DropDown name="Skills" />

                        <DropDown name="Experience" />
                        <div className="btn-group input-daterangepicker m-2">
                            <DateRangePicker
                                initialSettings={{
                                    autoUpdateInput: false, startDate: this.state.startDate, endDate: this.state.endDate, ranges: {
                                        Today: [moment().toDate(), moment().toDate()],
                                        Yesterday: [
                                            moment().subtract(1, 'days').toDate(),
                                            moment().subtract(1, 'days').toDate(),
                                        ],
                                        'Last 7 Days': [
                                            moment().subtract(6, 'days').toDate(),
                                            moment().toDate(),
                                        ],
                                        'Last 30 Days': [
                                            moment().subtract(29, 'days').toDate(),
                                            moment().toDate(),
                                        ],
                                        'This Month': [
                                            moment().startOf('month').toDate(),
                                            moment().endOf('month').toDate(),
                                        ],
                                        'Last Month': [
                                            moment().subtract(1, 'month').startOf('month').toDate(),
                                            moment().subtract(1, 'month').endOf('month').toDate(),
                                        ],
                                    },
                                }} onEvent={this.handleEvent} onCallback={this.handleCallback}
                            >

                                <input type="text" className="form-control btn-dropdown-width-2 " defaultValue="" placeholder="Joining Date Range Filter" />



                            </DateRangePicker>
                        </div>

                    </CCol>
                    <CCol className="search-top col-sm-4">
                        <CRow>
                            <CInputGroup>
                                <CInput id="input1-group2" name="input1-group2" placeholder="Username" />
                                <CInputGroupPrepend>
                                    <CButton type="button" color="primary"> Search</CButton>
                                </CInputGroupPrepend>
                            </CInputGroup>
                        </CRow>
                    </CCol>

                </CRow>

            </div>


        );
    }
}