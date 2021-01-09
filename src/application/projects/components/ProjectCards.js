import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCollapse,
    CFade,
    CLink,
    CCol,
    CRow,
    CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ProjectTable = (props) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const [showCard, setShowCard] = React.useState(true)

    return (
        <>
            <CFade in={showCard}>
                <CCard >
                    <CCardHeader>
                   
                        <CRow>
                            <CCol col sm="6">
                            {props.name}
                            </CCol>
                            <CCol >
                            <CCol  >
              <CButton active block shape="square" color="info" aria-pressed="true">Project Details</CButton>
            </CCol>
                            
                        
                        <CCol>
                        <div className="card-header-actions">
                            <CLink className="card-header-action">
                                <CIcon name="cil-settings" />
                            </CLink>
                            <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                            </CLink>
                            <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                                <CIcon name="cil-x-circle" />
                            </CLink>
                        </div>
                        </CCol>
                        </CCol>
                        </CRow>
                    </CCardHeader>
                    <CCollapse show={collapsed}>
                        <CCardBody>
                            <CRow>
                                <CCol>
                                    name: ABhimanyu
                </CCol>
                                <CCol>
                                    age:30
              </CCol>
              <CCol>
                                    new col:30
              </CCol>
                            </CRow>
                        </CCardBody>
                    </CCollapse>
                </CCard>
            </CFade>
        </>
    )
}

export default ProjectTable
