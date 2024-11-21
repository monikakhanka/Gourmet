const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-us">
                <h1 className="font-bold text-3xl p-4 m-4">Contact Page</h1>
                <form >
                    <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                    <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                    <button className="bg-slate-300 border border-gray-400 m-2 p-2 font-bold">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;