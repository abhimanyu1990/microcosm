import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from  '@coreui/react'
import usersData from '../../../views/users/UsersData'
import ProjectSearchBar from './ProjectSearchForm';
import ProjectCards from './ProjectCards';
import '../css/Project.css'

const fields = ['']


const ProjectTable = () => {
  return (
    <>
       
         <CCol>
          <CCard>
         
            <CCardHeader>
              <CRow>
              <CCol>
              <h3>Projects</h3>
              </CCol>
              </CRow>
              <CCol>
                <ProjectSearchBar />
              </CCol>
             
            </CCardHeader>
            <CCardBody >
            <CDataTable 
              items={usersData}
              fields={fields}
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                '':
                  (item)=>(
                    <ProjectCards name={item.name} />      
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      
    </>
  )
}

export default ProjectTable
