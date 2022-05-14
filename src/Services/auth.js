const TOKENKEY = "acompe-token";
const  idkey  =  "acompe-id" ;
const id_patient = "acompe-patient"

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

  export  const  idPatient  =  ( id )  =>  {
    localStorage.setItem ( id_patient ,  id ) ;
  }
  
  export  const  getId  =  ()  =>  {
    return localStorage.getItem ( idkey ) ;
  }
  export  const  getIdPatient  =  ()  =>  {
    return localStorage.getItem ( id_patient ) ;
  }


  export  const  logout  =  ( )  =>  {
    localStorage.removeItem ( TOKENKEY ) ;
    localStorage.removeItem ( idkey ) ;
    localStorage.removeItem ( id_patient ) ;
  } 