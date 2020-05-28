import React, { useState, useEffect } from "react";
import imgDocente from "../assets/img/faces/joe-gardner-2.jpg"
import imgAvatar from "../assets/img/default-avatar.png"
import Rating from "../components/Rating/starrating"
import RatingSet from "../components/Rating/starratingset"
import { useParams } from "react-router-dom";
import Subheader from "../components/subheader";

import { getOneDocente } from "../services/docente"
import { IDocente } from "../interfaces/docente"


import useFormHelper from "../helpers/useFormHelper";



// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  Input
} from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader";
//import NavigationTabs from "components/Navbars/NavigationTabs";

const DocentePage: React.FC = () => {
  
  const [docentex, setDocente] = useState([]);
  const [name, setName] = useState("");
  const [update, setUpdate] = useState(true);
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState("1");

  useEffect(() => {

    getOneDocente(id).then(r => {
      setDocente(r);
    });
  }, []);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);


  const toggle = (tab: any) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const states = useState({
    named: "",
    abrobado: false,
    rate: "",
    curso: ""
  });


  const {
    values,
    handleChange,
    updateValues
  } = useFormHelper(states);







  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />

      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={imgDocente}
                width="200"
                height="200"
              />
            </div>


            {docentex.map((doce: IDocente)=>(
              <Subheader title={doce.NombreDocente}></Subheader>
            ))}

          </div>

          <Col className="ml-auto mr-auto text-center" md="12">
            <h6 className="description">Docente</h6>
            <br />
          </Col>
          <div>
            <RatingSet></RatingSet>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="2">
              <br />

              <div className="nav-tabs-navigation">
                <div className=" nav-tabs-wrapper">
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Comentarios
                  </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>

            <TabPane className="text-center " tabId="1" id="comments">
              <Container>
                <Row>
                  <Col md="12">
                    <Row className="example-page">
                      <Col className="text-center mr-auto" md="12">
                        <Card className="bg-secondary  ml-auto mr-auto " >
                          <Row className="pt-3 px-3 ">
                            <Col md="2" sm="3">
                              <img
                                alt="..."
                                className="img-thumbnail img-responsive border-0 p-0"
                                src={imgAvatar}
                                width="32"
                                height="32"
                              />
                            </Col>
                            <Col md="6" sm="9">
                              <h4
                                className=" bg-secondary  mt-3 text-left text-white "
                                style={{ fontSize: 18 }}>Nickname</h4>
                            </Col>
                          </Row>

                          <Col className="mr-auto p-2">
                            <h6 className=" text-center text-white">Comentario</h6>
                            <p className="text-white" style={{ fontSize: 14 }}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint
                            </p>
                          </Col>
                          <div className="social-line text-center p-3">

                          </div>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="example-page">
                      <Col className="text-center" md="12">
                        <Card className="bg-secondary ml-auto mr-auto ">
                          <Row className=" pt-3 px-3">
                            <Col md="2" sm="3">
                              <img
                                alt="..."
                                className="img-thumbnail img-responsive border-0 p-0"
                                src={imgAvatar}
                                width="32"
                                height="32"
                              />
                            </Col>
                            <Col md="6" sm="9">
                              <h4
                                className=" mt-3 text-left text-white"
                                style={{ fontSize: 18 }}>Nickname</h4>
                            </Col>
                          </Row>


                          <Col className="  mr-auto p-2">
                            <h6 className="  text-center text-white">Comentario</h6>
                            <Input placeholder="Escribe tu comentario aquí" type="text" />
                          </Col>
                          <div>
                            <Rating></Rating>
                          </div>
                          <div className="  social-line text-center p-3">
                            <Button className="btn-round ml-2" color="danger" outline>
                              <i className="fa fa-comments" /> Publicar Comentario
                    </Button>
                          </div>
                        </Card>
                      </Col>

                    </Row>
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default DocentePage;
