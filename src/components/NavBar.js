import React, { useState } from 'react'
import AddContact from './AddContact'

export default function NavBar() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bolder fs-5 " aria-current="page" href="/"> <i className="fa fa-address-book-o"></i> Contact</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <button className="btn btn-secondary fw-semibold" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-whatever="@mdo" onClick={() => { setModalOpen(true); }}>
                                <i className='fa fa-plus-circle'></i> Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {modalOpen && <AddContact setOpenModal={setModalOpen} />}
            
        </div>
    )
}
