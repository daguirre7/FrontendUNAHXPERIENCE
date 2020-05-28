import React,{useState,useEffect} from "react";

import {useParams,Redirect} from "react-router-dom";

import Modal from "../components/modal";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import EstudianteForm from "../components/estudiante-form";



const CreateEstudiante: React.FC = () => {     
    const [needAction,setNeedAction] = useState(false);
    const [back,setBack] = useState(false);
    const {id} = useParams();

    /*Modal stages*/ 
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to delete?");
    const [completed,setCompleted] = useState(false);
    
    

    function hideModal(){
        setShowmodal(false);
    }
  
    function showModal(){
        setShowmodal(true);
    }

    function dropLanguage(){

    }
    /*-----------------------------------------*/

    

    useEffect(()=>{
        if(id){
            setNeedAction(true);
        }
    },[id]);

    if(back){
        return(
            <Redirect
                to="/perfil"
            />
        );
    }else{

        return(
            <div>


                <Modal
                    title="Confirmation"
                    description={message}
                    lbl_main_btn="Ok"
                    lbl_snd_btn="No"
                    show={showmodal}
                    closeModal={hideModal}
                    accept={dropLanguage} //// It should change based on view logic
                    submitting={submitting}
                    completed={completed}
                />

                <div className="container">
                    <Subheader 
                        title="Estudiante" 
                        deletebtn={needAction}
                        fncbtn={showModal}
                    />
                    <div className="row">
                    <EstudianteForm></EstudianteForm>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default CreateEstudiante;