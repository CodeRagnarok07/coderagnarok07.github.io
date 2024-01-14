import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        emailjs.sendForm('Personal_Email', 'template_falg43x', form.current, process.env.REACT_APP_USER_ID_MAIL)
            .then((result) => {
                console.log(result.text);
                alert(`success, your message will be answered soon `)
            }, (error) => {
                console.log(error.text);
            });
        e.preventDefault();
        e.target.reset();

    };
    return (
        <Link className="flex justify-center">
            <Link className='my-24 mx-[2%] md:mx-[15%] xl:mx-[30%] w-full sm:w-3/4 md:1/2 flex flex-col justify-center border-4 rounded-lg py-5 border-indigo-900'>
                <h1 className="text-center text-4xl font-bold" >Contact me</h1>
                <form ref={form} onSubmit={sendEmail} className="w-full my-8">
                    <Link className="flex flex-col justify-center ">
                        <input className="w-[90%] md:w-2/3 my-2 mx-auto m-[2%] shaodw shadow-md rounded-full px-4 focus:shadow-blue-600 shadow-sky-900 bg-transparent 
                        selection:active:focus:bg-transparent focus:outline-none"
                            autoComplete='off' aria-autocomplete='off' type="email" name="from_email" required placeholder="Email:"
                        />
                        <input className="w-[90%] md:w-2/3 my-2 mx-auto m-[2%] shaodw shadow-md rounded-full px-4 focus:shadow-blue-600 shadow-sky-900 bg-transparent 
                        selection:active:focus:bg-transparent focus:outline-none"
                            autoComplete='off' type="text" name="subject" required placeholder="Subject:"
                        />
                        <textarea className="w-[90%] md:w-2/3 my-2 mx-auto m-[2%] shaodw shadow-md rounded-md px-4 focus:shadow-blue-600 shadow-sky-900 bg-transparent 
                        selection:active:focus:bg-transparent focus:outline-none h-40"
                            name="message" required placeholder="Message:"
                        />
                    </Link>
                        <Link className='flex justify-center items-center'>
                            <button type="submit"
                            className='-mb-[7rem] px-10 py-3 font-bold 
                            shadow-md rounded-lg shadow-indigo-900
                            bg-gradient-to-r from-blue-700 to-indigo-900
                            hover:bg-gradient-to-l transition-color ease-out duration-300
                            ' >submit</button>
                        </Link>
                </form>
            </Link >
        </Link >

    )
}

export default Contact