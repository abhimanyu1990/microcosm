import React, { Component } from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CLink
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import UserSearchBar from './component/UserSearchForm'

const usersData = [
    {Id: 0, Name: 'John Doe', Department: 'HR', Deployment: '2018/01/01', Designation: 'Guest', status: 'Pending', Actions:""},
    {Id: 1, Name: 'Samppa Nori', Department: 'HR',Deployment: '2018/01/01', Designation: 'Member', status: 'Active',Actions:""},
    {Id: 2, Name: 'Estavan Lykos', Department: 'HR',Deployment: '2018/02/01', Designation: 'Staff', status: 'Banned',Actions:""},
    {Id: 3, Name: 'Chetan Mohamed',Department: 'HR', Deployment: '2018/02/01', Designation: 'Admin', status: 'Inactive',Actions:""},
    {Id: 4, Name: 'Derick Maximinus',Department: 'HR', Deployment: '2018/03/01', Designation: 'Member', status: 'Pending'},
    {Id: 5, Name: 'FrIderik DávId',Department: 'Development', Deployment: '2018/01/21', Designation: 'Staff', status: 'Active'},
    {Id: 6, Name: 'Yiorgos Avraamu',Department: 'HR', Deployment: '2018/01/01', Designation: 'Member', status: 'Active'},
    {Id: 7, Name: 'Avram Tarasios',Department: 'Development', Deployment: '2018/02/01', Designation: 'Staff', status: 'Banned'},
    {Id: 8, Name: 'Quintin Ed',Department: 'Development', Deployment: '2018/02/01', Designation: 'Admin', status: 'Inactive'},
    {Id: 9, Name: 'Enéas Kwadwo',Department: 'Development', Deployment: '2018/03/01', Designation: 'Member', status: 'Pending'},
    {Id: 10, Name: 'Agapetus Tadeáš',Department: 'Development', Deployment: '2018/01/21', Designation: 'Staff', status: 'Active'},
    {Id: 11, Name: 'Carwyn Fachtna',Department: 'Development', Deployment: '2018/01/01', Designation: 'Member', status: 'Active'},
    {Id: 12, Name: 'Nehemiah Tatius',Department: 'Development', Deployment: '2018/02/01', Designation: 'Staff', status: 'Banned'},
    {Id: 13, Name: 'Ebbe Gemariah',Department: 'Management', Deployment: '2018/02/01', Designation: 'Admin', status: 'Inactive'},
    {Id: 14, Name: 'Eustorgios Amulius',Department: 'Management', Deployment: '2018/03/01', Designation: 'Member', status: 'Pending'},
    {Id: 15, Name: 'Leopold Gáspár',Department: 'Management', Deployment: '2018/01/21', Designation: 'Staff', status: 'Active'},
    {Id: 16, Name: 'Pompeius René',Department: 'Management', Deployment: '2018/01/01', Designation: 'Member', status: 'Active'},
    {Id: 17, Name: 'Paĉjo Jadon',Department: 'Management', Deployment: '2018/02/01', Designation: 'Staff', status: 'Banned'},
    {Id: 18, Name: 'Micheal Mercurius',Department: 'Management', Deployment: '2018/02/01', Designation: 'Admin', status: 'Inactive'},
    {Id: 19, Name: 'Ganesha Dubhghall',Department: 'Management', Deployment: '2018/03/01', Designation: 'Member', status: 'Pending'},
    {Id: 20, Name: 'Hiroto Šimun',Department: 'Management', Deployment: '2018/01/21', Designation: 'Staff', status: 'Active'},
    {Id: 21, Name: 'Vishnu Serghei',Department: 'Management', Deployment: '2018/01/01', Designation: 'Member', status: 'Active'},
    {Id: 22, Name: 'Zbyněk Phoibos',Department: 'Management', Deployment: '2018/02/01', Designation: 'Staff', status: 'Banned'},
    {Id: 23, Name: 'Aulus Agmundr',Department: 'Management', Deployment: '2018/01/01', Designation: 'Member', status: 'Pending'},
    {Id: 42, Name: 'Ford Prefect',Department: 'Management', Deployment: '2001/05/25', Designation: 'Alien', status: 'Don\'t panic!'}
  ]
export class UserHome extends Component {
    fields = ["Id",'Name','Deployment','Department', 'Designation', 'status', 'Actions']

    getBadge = status => {
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: return 'primary'
        }
      }

    render() {
        return (
            <div>
                
      <CRow>
        <CCol>
          <CCard>
            
            <CCardHeader>
            <CRow>
                <CCol>
            <h3>Users</h3>
            </CCol>
            </CRow>
            <CCol>
                <UserSearchBar />
              </CCol>
            </CCardHeader>
            <CCardBody>
            <CDataTable 
              items={usersData}
              fields={this.fields}
              hover
              striped
              hover
              sorter
              border
              size="sm-4"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={this.getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              },
              {  'Actions':
                    ()=>(
                        <CCol className="float-left">
                                        <div className="card-header-actions custom-padding-top">
                                            <CLink className="card-header-action">
                                                <CIcon name="cil-settings" />
                                            </CLink>
                                            <CLink className="card-header-action">
                                                <CIcon name="cil-x-circle" />
                                            </CLink>
                                        </div>
                                    </CCol>
                    )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
            </div>
        )
    }
}

export default UserHome
