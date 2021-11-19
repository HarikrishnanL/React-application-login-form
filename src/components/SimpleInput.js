
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameisValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));


  let formIsValid = false;

  if (enteredNameisValid && enteredEmailIsValid) {
    formIsValid = true;
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameisValid) {
      return;
    }
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);

    // nameInputRef.current.value = '';
    resetNameInput();
    resetEmailInput();
  }



  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          value={enteredName}
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler} />

        {nameInputHasError && <p className={"error-text"}>Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler} />

        {emailInputHasError && <p className={"error-text"}>Please enter a valid email</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
