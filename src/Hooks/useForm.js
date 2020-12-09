import { useState } from 'react';

const useForm = () => {

    let [messageInput, setMessageInput] = useState({
        name: '',
        subject: '',
        company: '',
        email: '',
        message: ''
    })


    let [isFilled, isFormFilled] = useState(true);

    const handleChange = e => {
        const { name, value } = e.target;
        setMessageInput({
            ...messageInput,
            [name]: value,
        });
        isFormFilled(checkFormPopulation(value))
    }

    const clearForm = () => {
        setMessageInput({});
    }

    const checkFormPopulation = (form) => {
        let count = 0;
        let arr = Object.entries(form);
        for (let [key, value] of arr) {
            if (value.length > 4) {
                count++;
            }
        }
        if (count == arr.length) {
            return false
        }
        return true
    }
    return { handleChange, clearForm, messageInput, isFilled };
}

export default useForm; 
