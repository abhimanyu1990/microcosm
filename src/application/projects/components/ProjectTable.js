import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable
} from  '@coreui/react'
import usersData from '../../../views/users/UsersData'
import ProjectCards from './ProjectCards';
import '../css/Project.css'
const fields = ['']


const ProjectTable = () => {
  return (
    <>
         <CCol>
          <CCard>
            <CCardHeader>
              <CCol>
              <h3>Projects</h3>
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
