import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { addContact } from '../redux/actions/actions';
import shortid from 'shortid';
import './style.css'


export default function AddContact({ setOpenModal }) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    const [formValue, setFormValue] = useState({
        id: shortid.generate(),
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const { name, email, phone } = formValue;
    console.log(name, email, phone)

    const addNewContact = (e) => {
        e.preventDefault()
        dispatch(addContact(formValue))
        setOpenModal(false)
        // navigate('/')
    }

    return (
        <div>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => { setOpenModal(false); }}>
                            <i className='fa fa-close'></i>
                        </button>
                    </div>

                    <div className="card border-0 shadow">
                        <div className="card-header fw-bolder text-center">Add a Contact</div>
                        <div className="card-body mt-2">
                            <form onSubmit={(e) => addNewContact(e)}>
                                <div className="form-group">
                                    <input type="text" className="form-control border-dark shadow-none mb-2" placeholder="Enter Your Name" name='name' onChange={handleChange} value={name} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-dark shadow-none mb-2" placeholder="Enter Your Phone" name='phone' onChange={handleChange} value={phone} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-dark shadow-none mb-2" placeholder="Enter Your Email" name='email' onChange={handleChange} value={email} />
                                </div>
                                <button className="btn btn-success mt-3" type="submit">
                                    Create Contact
                                </button>
                            </form>
                        </div>
                    </div>


                    {/* <div className="footer">
                        <button onClick={() => { setOpenModal(false); }} id="cancelBtn">
                            Cancel
                        </button>
                        <button>Continue</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
