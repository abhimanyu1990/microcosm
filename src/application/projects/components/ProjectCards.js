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
import ProjectWidgetDropDown from './ProjectWidgetDropDown';

const ProjectTable = (props) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const [showCard, setShowCard] = React.useState(true)

    return (
        <>
            <CFade in={showCard}>
                <CCard >
                    <CCardHeader>

                        <CRow>
                            <CCol >
                                <CRow className="row-project-card row-header">
                                    <CCol className="project-header" >
                                        Project Name:
                                    </CCol>
                                    <CCol >
                                        {"Test Project"}
                                    </CCol>
                                </CRow>
                                <CRow>
                                <CCol >
                                <CRow className="row-project-card row-header">
                                    <CCol className="project-header" >
                                        Project Manager:
                                    </CCol>
                                    <CCol>
                                        {"Abhimanyu Singh"}
                                    </CCol>
                                </CRow>
                            </CCol>
                                </CRow>

                            </CCol>
                            <CCol >
                                <CRow className="row-project-card row-header">
                                    <CCol className="project-header" >
                                        Project Type:
                                    </CCol>
                                    <CCol >
                                        {"long-term"}
                                    </CCol>
                                </CRow>
                                <CRow>
                                <CCol >
                                <CRow className="row-project-card row-header">
                                    <CCol className="project-header" >
                                        Project Status:
                                    </CCol>
                                    <CCol>
                                        {"Active"}
                                    </CCol>
                                </CRow>
                            </CCol>
                                </CRow>
                            </CCol>

                            <CCol>
                            
                            <CRow className="row-project-card row-header">
                                    <CCol className="project-header">
                                        Open Issues:
                                    </CCol>
                                    <CCol >
                                        {10}
                                    </CCol>
                                </CRow>
                            

                                <CRow className="row-project-card row-header" >
                                    <CCol className="project-header" >
                                        Actions:
                                    </CCol>
                                    <CCol className="float-left">
                                        <div className="card-header-actions">
                                            <CLink className="card-header-action">
                                                <CIcon name="cil-settings" />
                                            </CLink>
                                            <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                                                <CIcon name="cil-x-circle" />
                                            </CLink>
                                            <CLink className="card-header-action card-header-action-danger" onClick={() => setCollapsed(!collapsed)}>
                                                <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                            </CLink>
                                        </div>
                                    </CCol>
                                </CRow>
                       
                                
                            </CCol>
                        </CRow>
                    </CCardHeader>
                    <CCollapse show={collapsed}>
                        <CCardBody>
                            <CRow>
                                <CCol>
                                <ProjectWidgetDropDown />
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
