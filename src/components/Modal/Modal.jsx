

const Modal = () => {


    const handleSunmite = (e) => {
       e.preventDefault();
        console.log('form submit done')
       


    }


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}


            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-[800px]">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <form onSubmit={handleSunmite} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Frist Name</span>
                                </label>
                                <input name="fname" type="text" placeholder="Frist Name" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input name="lnane" type="text" placeholder="Last Name" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input name="phone" type="email" placeholder="Phone" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input name="time" type="date" placeholder="Phone" className="input input-bordered"  />
                            </div>

                           

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Losdgin</button>
                            </div>
                        </form>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;