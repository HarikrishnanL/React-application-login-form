import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  // const [enteredNameisValid, setEnteredNameisValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const [enterdEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredNameisValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameisValid && enteredNameTouched;

  const enteredEmailIsValid = enterdEmail.includes('@'); // regex validation required
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;




  let formIsValid = false;

  // useEffect(() => {
  if (enteredNameisValid && enteredEmailIsValid) { // can other properties if it is der like enteredAgeisValid
    formIsValid = true;
  }
  // else {
  //   formIsValid = false;
  // }
  // }, [enteredNameisValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== '') {
    //   setEnteredNameisValid(true);
    // }
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };


  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameisValid) {
      return;
    }
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);

    // nameInputRef.current.value = '';
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }



  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          value={enteredName}
          type='text'
          id='name'
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler} />

        {nameInputIsInvalid && <p className={"error-text"}>Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          // ref={nameInputRef}
          value={enterdEmail}
          type='email'
          id='email'
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler} />

        {enteredEmailIsInvalid && <p className={"error-text"}>Please enter a valid email</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
