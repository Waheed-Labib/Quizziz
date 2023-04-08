import React, { useState } from 'react';
import './Option.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const Option = ({ optionIndex, option, options, correctAnswer }) => {

    const [isClicked, setIsClicked] = useState(false);

    const isCorrect = () => {
        if (option === correctAnswer) return true;
        else return false;
    }

    const notifySuccess = () => toast("Correct !",
        {
            style: {
                backgroundColor: 'green',
                color: 'white',
                fontWeight: 600
            }
        });
    const notifyFailure = () => toast("Failed !",
        {
            style: {
                backgroundColor: 'red',
                color: 'white',
                fontWeight: 600
            }
        }
    );

    const handleOptionClick = (option) => {
        setIsClicked(true);
        if (isCorrect()) notifySuccess();
        else notifyFailure();
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            {
                option && <p onClick={() => handleOptionClick(option)} className='w-75 option'>
                    <div className='d-flex justify-content-start'>
                        {
                            optionIndex === 0 && <span className='option-serial'>A.</span>
                        }

                        {
                            optionIndex === 1 && <span className='option-serial'>B.</span>
                        }

                        {
                            optionIndex === 2 && <span className='option-serial'>C.</span>
                        }

                        {
                            optionIndex === 3 && <span className='option-serial'>D.</span>
                        }

                        <span className='option-text'>{option}</span>
                    </div>

                    {
                        isClicked && <span className=''>
                            {
                                isCorrect() ? <FontAwesomeIcon className='text-success fw-bold fs-1' icon={faCheck}></FontAwesomeIcon> : <FontAwesomeIcon className='text-danger fw-bold fs-1' icon={faXmark}></FontAwesomeIcon>
                            }
                        </span>
                    }

                </p>
            }
        </div>
    );
};

export default Option;