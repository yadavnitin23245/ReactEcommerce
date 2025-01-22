export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  // const getIsFormValid = () => { 
  //   return ( 
  //     firstName && 
  //     validateEmail(email) && 
  //     password.value.length >= 8 && 
  //     role !== "role" 
  //   ); 
  //  }; 

  //  const clearForm = () => { 
  //   setFirstName(""); 
  //   setLastName(""); 
  //   setEmail(""); 
  //   setPassword({ 
  //     value: "", 
  //     isTouched: false, 
  //   }); 
  //   setRole("role"); 
  //  };