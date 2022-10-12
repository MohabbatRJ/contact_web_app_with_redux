import React, { useState } from 'react'
import Avatar from "react-avatar";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../redux/actions/actions';
import EditContact from './EditContact';
// import EditContact from './EditContact';


export default function Contact({ contact, selectAll }) {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { name, email, phone, id } = contact

    const removeContact = (id)=> {
        dispatch(deleteContact(id))
        console.log(id)
    }

    return (
        < >
        {/* <tr > */}
        {modalOpen && <EditContact setOpenModal={setModalOpen} />}
        {/* </tr> */}
            <tr >
                <td key={id}>
                    <input 
                        checked={selectAll}
                        type="checkbox"
                        className="custom-control-input"
                    // value={selectAll}
                    // onClick={() => setSelectAll(!selectAll)}
                    />
                </td>
                <td> <Avatar className="me-2" name={name} size="35" round={true} />  {name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td className='actions'>
                    <Link to={`/edit/${id}`} 

                    > 
                    <i className="fa fa-pencil me-4 text-primary" role="button" aria-hidden="true" onClick={() => { setModalOpen(true); }}></i>
                    </Link>
                    <i className="fa fa-trash text-danger" role="button" aria-hidden="true"
                    onClick={()=>removeContact(id)}></i>
                </td>
            </tr>
           
        </>
    )
}
