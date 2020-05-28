import React, { useState,useEffect } from "react";
import imgF from "../assets/img/unah-image.jpg"
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col} from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import useFormHelper from "../helpers/useFormHelper";


//Gets
import {ICarrera} from "../interfaces/carrera";
import {getCarreras} from "../services/carreras";
import {postEstudiante} from "../services/estudiante";

const  Nuevo: React.FC = () => {
  const [carreras,setCarreras] = useState([]);
  const [estudiante,setEstudiante] = useState([]);
  
  const states = useState({
    name: "",
    description: "",
    category: ""
  });  

  const {
    values,      
    handleChange,
    //updateValues      
  } = useFormHelper(states);

  useEffect(()=>{
    getCarreras().then(c => {
      setCarreras(c);
    });
  },[]);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("nuevo");
    return function cleanup() {
      document.body.classList.remove("nuevo");
    };
  });
  return (
    <>
    <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + imgF+ ")"
        }}
      >
        <div className="filter" />
        <Container className="mt-3">
          <Row className="example-page ">
            <Col className="ml-auto mr-auto " md="10 ">
              <Card className=" ml-auto mr-auto px-4">
                <h3 className="title mx-auto">Registro Nuevo Estudiante</h3>
                <Form className="register-form">
                  <Row className="pb-2">
                    <Col>
                  <label className="text-white">Nombres</label>
                  <Input placeholder="Nombres" type="text" />
                  </Col>
                  <Col>
                  <label className="text-white">Apellidos</label>
                  <Input placeholder="Apellidos" type="text" />
                  </Col>
                  <Col>
                  <label className="text-white">Nickname</label>
                  <Input placeholder="Nickname" type="text" />
                  </Col>
                  </Row>
                  <Row className="pb-2">
                  <Col>
                  <label className="text-white">Número de Cuenta</label>
                  <Input placeholder="# de Cuenta" type="number" />
                  </Col>
                  <Col>
                  <label className="text-white">Carrera</label>
                  <select className="form-control form-control-md" 
                         
                      id="exampleFormControlSelect1"
                      onChange={handleChange}
                      name="carrera"
                      value={values.carrera}
                    >
                    <option style={{  backgroundColor: 'white',color: 'red' }} value="">Seleccione una carrera</option>
                    {carreras.map( (carrera:ICarrera) => (
                      <option style={{  backgroundColor: 'white', color: 'black' }} value={carrera._id} key={carrera._id} >{carrera.NombreCarrera}</option>
                     ) )}
                  </select>
                  </Col>
                  </Row>
                  <Row className="pb-2">
                    <Col>
                  <label className="text-white">Email</label>
                  <Input placeholder="Email" type="email" />
                  </Col>
                  <Col>
                  <label className="text-white">Contraseña</label>
                  <Input placeholder="Contraseña" type="password" />
                  </Col>
                  <Col>
                  <label className="text-white">Confirmar Contraseña</label>
                  <Input placeholder="Confirmar Contraseña" type="password" />
                  </Col>
                  </Row>

                  <Row>
                  <Button block className="btn-round mb-4 " color="danger">
                    Registrarme
                  </Button>
                  </Row>
                 
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Nuevo;
