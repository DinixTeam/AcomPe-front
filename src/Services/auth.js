const TOKENKEY = "acompe-token";
const  idkey  =  "acompe-id" ;
const id_patient = "acompe-patient"
const id_consulta = "acompe-consula"

export const isAuthenticated = () => {
    return localStorage.getItem(TOKENKEY) !== null;
  };

  export const getToken = () => {
    return localStorage.getItem(TOKENKEY);
  }

  export const login = (token) => {
    localStorage.setItem(TOKENKEY, token);
  };

  export  const  idUser  =  ( id )  =>  {
    localStorage.setItem ( idkey ,  id ) ;
  }

  export  const  idConsulta  =  ( id )  =>  {
    localStorage.setItem ( id_consulta ,  id ) ;
  }

  export  const  idPatient  =  ( id )  =>  {
    localStorage.setItem ( id_patient ,  id ) ;
  }
  
  export  const  getId  =  ()  =>  {
    return localStorage.getItem ( idkey ) ;
  }

  export  const  getIdConsulta  =  ()  =>  {
    return localStorage.getItem ( id_consulta ) ;
  }
  export  const  getIdPatient  =  ()  =>  {
    return localStorage.getItem ( id_patient ) ;
  }

  export const removerPatient = () => {
    localStorage.removeItem ( id_patient ) ;
  }
  export const removerConsulta = () => {
    localStorage.removeItem ( id_consulta ) ;
  }


  export  const  logout  =  ()  =>  {
    localStorage.removeItem ( TOKENKEY ) ;
    localStorage.removeItem ( idkey ) ;
    localStorage.removeItem ( id_patient ) ;
    localStorage.removeItem ( id_consulta ) ;
  } 