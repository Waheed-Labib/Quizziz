import React from 'react';
import './Option.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ optionIndex, option, options, correctAnswer }) => {

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
        if (option === correctAnswer) notifySuccess();
        else notifyFailure();
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            {
                option && <p onClick={() => handleOptionClick(option)} className='w-50 option'>
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

                </p>
            }
        </div>
    );
};

export default Option;