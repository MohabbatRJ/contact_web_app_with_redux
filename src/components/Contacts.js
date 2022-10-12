import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllContact, deleteAllContact, selectAllContact } from '../redux/actions/actions';
import Contact from './Contact'

export default function Contacts() {

    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contactReducer.contacts)
    console.log('selector contacts', contacts)

    const selctedContacts = useSelector(
        (state) => state.contactReducer.selectedContacts
    );

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        } 
        else {
              dispatch(clearAllContact());
        }
        
    }, [selectAll, dispatch, contacts]);

    const deleteContact = () => {
        setSelectAll(selectAll)
        dispatch(deleteAllContact())
        selctedContacts.length = 0
    }

    return (
        <div className='container mt-3'>
            {selctedContacts.length > 0 ? (
                <button
                    className="btn btn-danger mb-3"
                    onClick={() => deleteContact()}
                >
                    Delete All
                </button>
            ) : null}
            <table className="table shadow ">
                <thead className='text-white bg-secondary'>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input
                                    id="selectAll"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => setSelectAll(!selectAll)}
                                />
                                <label
                                    htmlFor="selectAll"
                                    className="custom-control-label"
                                ></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => (
                            <Contact contact={contact} keys={contact.id} selectAll={selectAll} />
                        ))
                    }
                    {/* {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))} */}
                </tbody>
            </table>
        </div>
    )
}
