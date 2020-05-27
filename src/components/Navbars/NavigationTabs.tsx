import React from "react";

import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
  } from "reactstrap";

  import IndexHeader from "../Headers/IndexHeader";
  import SectionCarousel from "../../views/SectionCarousel";
 // import SectionForo from "../views/index-sections/SectionForo";
  import SectionTeachers from "../../views/docente";
  //import SectionLogin from "../views/index-sections/SectionLogin";

function SectionProgress() {
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab: string) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
    return (
      <>
      
        <div className="section pb-0 m-0">
          <Container className="pl-0">
            <br />
            <Row >
              <Col md="12">
               
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <Nav  id="tabs" role="tablist" tabs>
                      <NavItem>
                        <NavLink
                          className={activeTab === "1" ? "active" : ""}
                          onClick={() => {
                            toggle("1");
                          }}
                        >
                          Inicio
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={activeTab === "2" ? "active" : ""}
                          onClick={() => {
                            toggle("2");
                          }}
                        >
                          Foro
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={activeTab === "3" ? "active" : ""}
                          onClick={() => {
                            toggle("3");
                          }}
                        >
                          Docentes
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <TabContent activeTab={activeTab} className="text-center m-0">
                  <TabPane tabId="1">
                  <SectionCarousel />
                  {/* <SectionLogin /> */}
                  <IndexHeader />
                  </TabPane>
                  <TabPane tabId="2">
                  {/* <SectionForo /> */}
                    
                  </TabPane>
                  <TabPane tabId="3">
                  <SectionTeachers />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>{" "}
        
      </>
    );
  }
  
  export default SectionProgress;