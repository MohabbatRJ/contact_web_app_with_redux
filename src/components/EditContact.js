import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../redux/actions/actions';

export default function EditContact({setOpenModal}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contactReducer.contact)
    console.log('edit Selector',contact)

    let {id} = useParams()

    const back = () => {
        navigate('/')
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {
        if(contact != null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    },[contact, dispatch, id]);

    const onUpdateContact = (e) => {
        e.preventDefault();
    
        const update_contact =  Object.assign(contact,{
            // id: id,
          name: name,
          phone: phone,
          email: email,
        });
    
        dispatch(updateContact(update_contact));
        navigate("/")
      };

  return (
    <div>
      <div className="modalBackground" >
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button 
                        onClick=
                        {back}
                        // {() => { setOpenModal(false); }}
                        >
                            <i className='fa fa-close'></i>
                        </button>
                    </div>

                    <div className="card border-0 shadow">
                        <div className="card-header fw-bolder text-center">Edit a Contact</div>
                        <div className="card-body mt-2">
                            <form onSubmit={(e) => onUpdateContact(e)}>
                                <div className="form-group">
                                    <input type="text" className="form-control border-dark shadow-none mb-2" placeholder="Enter Your Name" name='name' onChange={(e)=>setName(e.target.value)} value={name}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-dark shadow-none mb-2" placeholder="Enter Your Phone" name='phone' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-dark shadow-none mb-2" placeholder="Enter Your Email" name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                </div>
                                <button className="btn btn-success mt-3" type="submit">
                                    Update Contact
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
