import React, { useState, useEffect } from "react";
import imgF from "../assets/img/unah-image.jpg"

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import useFormHelper from "../helpers/useFormHelper";

import Modal from "./modal";

//Gets

import { useParams,Redirect } from "react-router-dom";
import { ICarrera } from "../interfaces/carrera";
import { getCarreras } from "../services/carreras";
import { postEstudiante } from "../services/estudiante";




const EstudianteForm: React.FC = () => {
    const [carreras, setCarreras] = useState([]);
    const [cleanUp, setCleanUp] = useState(true);
    const [redirectNow,setRedirectNow] = useState(false);


    const [showmodal,setShowmodal] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("Do you want to save?");
    const [completed, setCompleted] = useState(false);

    function hideModal(){
        setShowmodal(false);
      }
  
      function showModal(){
        setShowmodal(true);
      }          

      function redirectTo(event:any){
        
        setRedirectNow(true)
    }
      function saveEstudiante() {

        if (!completed) {
            setSubmitting(true);
            setMessage("Sending...");

            if (id) {
                        // putLanguage(id,values).then(value=>{
                        //   setCompleted(true);
                        //   setSubmitting(false);
                        //   if(value.data.successed){
                        //     setMessage("Language updated with success");          
                        //   }else{
                        //     setMessage("Language name already exist");
                        //   }
                        // }) 
                        // console.log("OKKK");
            } else {

                postEstudiante(values).then(value => {
                    setCompleted(true);
                    setSubmitting(false);
                    if (value.data.successed) {
                        setMessage("Estudiante stored with success");
                        redirectTo;
                    } else {
                        setMessage("Estudiante name already exist");
                    }
                })
            }
        } else {
            setCompleted(false);
            setMessage("Do you want to save?");
            hideModal();
        }

    }
    const { id } = useParams();

    const states = useState({
        name: "",
        description: "",
        category: ""
    });


    
    const {
        values,
        handleChange,
        updateValues      
    } = useFormHelper(states);

    
    // useEffect(()=>{
    //     if(id && cleanUp){
    //       setCleanUp(false);
    //       getEs(id).then(value=>{
    //         updateValues({
    //           name: value.data.name,
    //           description: value.data.description,
    //           category: value.data.category
    //         });          
    //       })
    //     }
    //   },[id,updateValues,cleanUp])

    useEffect(() => {
        getCarreras().then(c => {
            setCarreras(c);
        });
    }, []);

    useEffect(() => {
        return () => {
            console.log("cleaned up");
        };
    }, []);

    // document.documentElement.classList.remove("nav-open");
    // React.useEffect(() => {
    //     document.body.classList.add("nuevo");
    //     return function cleanup() {
    //         document.body.classList.remove("nuevo");
    //     };
    // });
    //Funcion salvar estudiante




    
    return (
        
        <>
            <IndexNavbar />
            <Modal
          title="Confirmation"
          description={message}
          lbl_main_btn="Ok"
          lbl_snd_btn="No"
          show={showmodal}
          closeModal={hideModal}
          accept={saveEstudiante}
          submitting={submitting}
          completed={completed}
        />
            <div

              
                className="page-header"
                style={{
                    backgroundImage: "url(" + imgF + ")"
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
                                            <Input placeholder="Nombres"
                                                type="text"
                                                onChange={handleChange}
                                                name="Name"
                                                defaultValue={values.Name}
                                            />
                                        </Col>
                                        <Col>
                                            <label className="text-white">Apellidos</label>
                                            <Input placeholder="Apellidos"
                                                type="text"
                                                onChange={handleChange}
                                                name="LastName"
                                                defaultValue={values.LastName}
                                            />
                                        </Col>
                                        <Col>
                                            <label className="text-white">Nickname</label>
                                            <Input placeholder="Nickname"
                                                type="text"
                                                onChange={handleChange}
                                                name="NickName"
                                                defaultValue={values.NickName}
                                            />

                                        </Col>
                                    </Row>
                                    <Row className="pb-2">
                                        <Col>
                                            <label className="text-white">Número de Cuenta</label>
                                            <Input placeholder="# de Cuenta"
                                                type="number"
                                                onChange={handleChange}
                                                name="AccountNumber"
                                                defaultValue={values.AccountNumber}
                                            />
                                        </Col>
                                        <Col>
                                            <label className="text-white">Carrera</label>
                                            <select className="form-control form-control-md"

                                                id="exampleFormControlSelect1"
                                                onChange={handleChange}
                                                name="CarreraID"
                                                value={values.CarreraID}
                                            >
                                                <option style={{ backgroundColor: 'white', color: 'red' }} value="">Seleccione una carrera</option>
                                                {carreras.map((Carrera: ICarrera) => (
                                                    <option style={{ backgroundColor: 'white', color: 'black' }}
                                                        value={Carrera._id} key={Carrera._id} >{Carrera.NombreCarrera}</option>
                                                ))}
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="pb-2">
                                        <Col>
                                            <label className="text-white">Email</label>
                                            <Input placeholder="Email"
                                                type="email"
                                                onChange={handleChange}
                                                name="Email"
                                                defaultValue={values.Email}

                                            />
                                        </Col>
                                        <Col>
                                            <label className="text-white">Contraseña</label>
                                            <Input placeholder="Contraseña"
                                                type="password"
                                                onChange={handleChange}
                                                name="Password"
                                                defaultValue={values.Password}
                                            />
                                        </Col>
                                        <Col>
                                            <label className="text-white">Confirmar Contraseña</label>
                                            <Input placeholder="Confirmar Contraseña"
                                                type="password" />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Button  className="btn-round mb-4 " color="danger"
                                        onClick={showModal}>
                                            Registrarme
                                        </Button>
                                    </Row>

                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                { (redirectNow) && (
                <Redirect to={`/index}`} ></Redirect>
            ) }
            </div>
        </>
    );
}

export default EstudianteForm;
