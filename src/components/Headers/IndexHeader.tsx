import React from "react";
import I1 from '../../assets/img/default-avatar.png';

// reactstrap components
import {
  Button,
  Card, 
//   Form,
//   Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col} from "reactstrap";

// core components

const IndexHeader: React.FC = () => (
    <>
        <div id="images">
          <Container>
            <div className="title">
            <Row>
              <Col className="ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={I1}
                />
              </Col>
              <Col className="mr-auto">
                <h4>Titulo del Foro</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nunc fringilla quis, mi feugiat dui cras integer urna inceptos commodo lacinia pellentesque arcu, hendrerit sapien senectus per montes potenti eget aliquam cum. Potenti proin fusce id cum a consequat pellentesque, gravida morbi odio phasellus curabitur placerat habitasse dui, posuere sapien imperdiet neque quam penatibus. Et nulla pellentesque dui fringilla ligula lobortis rutrum torquent, senectus elementum aliquet tincidunt nisi vel magna molestie euismod, quis viverra non diam sagittis placerat varius.</p>
              </Col>
              <Col>
                      <Col>
                        <Card className="card-register">
                          <h3 className="title mx-auto text-white">Comentarios</h3>
                          <Row>
                            <Col className="bg-dark py-5  btn-round">
                              <InputGroup className="form-group-no-border">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="nc-icon nc-send pb-5" />
                                      <textarea className="border-0 btn-round" placeholder="Escribe tu comentario aquí" /*type="text"*/ />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </Col>
                              <Col>
                              <Button
                                block
                                className="btn-round"
                                color="danger"
                                type="button"
                              >
                                Escribir Comentario
                              </Button>
                              </Col>
                          </Row>
                        </Card>
                      </Col>
              </Col>
            </Row>
            </div>
            
          </Container>
        </div>
    </>
  );


export default IndexHeader;