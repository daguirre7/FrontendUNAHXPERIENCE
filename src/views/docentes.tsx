/* -------------------- Sección de Docentes de la página principal  -------------------- */
import React from "react";
import AvatarDocente from "../assets/img/default-avatar.png"
// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardBody,
  CardFooter,
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  Input, 
  InputGroup,
  Modal,
  Form
} from "reactstrap";

// core components

const Docentes: React.FC = () => {   
  //Función para mostrar la ventana modal
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            {/* -------------------- Barra de busqueda y botón de creación de solicitud  -------------------- */}
        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="nc-icon nc-zoom-split" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Nombre del docente o carrera" type="text" />
            </InputGroup>
            </Col>
            <Col md="1">
            <Button
                      className="btn-rounded m-0 "
                      color="dark"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-search" />
                    </Button>
                    </Col>
            <Col md="3">
                  <Button className="btn-rounded" color="primary" outline  type="button"
                onClick={toggleModal}
              >
                  <i className="fa fa-check" /> Solicitar Nuevo Docente
                </Button>
                {/* --------------------- Ventana Modal ----------------------- */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header  bg-dark">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span className="text-white" aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center text-white"
                    id="exampleModalLabel"
                  >
                   Solicitud de Nuevo Docente
                  </h5>
                </div>
                <div className="modal-body bg-dark">
                <Form className="register-form ">
                  <label className="text-white">Nombre</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  placeholder="Nombre Completo" type="text" />
                  </InputGroup>
                  <label className="text-white">Facultad a la que pertenece</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Ingrese su facultad" type="text" />
                  </InputGroup>
                  <label className="text-white">Curso que imparte</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-bulb-63" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre del curso que imparte" type="text" />
                  </InputGroup>
                </Form>
                </div>
                <div className="modal-footer bg-dark">
                  <div className="left-side">
                    <Button
                      className="btn-link  bg-dark border-0"
                      color="danger"
                      type="button"
                      onClick={toggleModal}
                    >
                      Cancelar
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link bg-dark" color="success" type="button">
                      Envíar solicitud
                    </Button>
                  </div>
                </div>
              </Modal>
                    </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className=" card card-profile card-plain p-3 ">
                  <div className=" card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img className={"img-circle "}
                        alt="..."
                        src={AvatarDocente}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className=" card-category text-white">Docente de Matemáticas</h6>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-share" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img className={"img-circle "}
                        alt="..."
                        src={AvatarDocente}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-share" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              {/* -------------------- Listado de Docentes  -------------------- */}
              <Col md="4">
                <Card className=" card card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img className={"img-circle "}
                        alt="..."
                        src={AvatarDocente}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-share" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img className={"img-circle "}
                        alt="..."
                        src={AvatarDocente}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Docente de Matemáticas</h6>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-share" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img className={"img-circle "}
                        alt="..."
                        src={AvatarDocente}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-share" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img className={"img-circle "}
                        alt="..."
                        src={AvatarDocente}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-share" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
    </>
  );
}

export default Docentes;
