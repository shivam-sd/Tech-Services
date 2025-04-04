import React, { useState } from "react";

const Form = () => {

    // const [fullName, setFullName] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Phone, setPhone] = useState("");
    // const [message, setMessage] = useState("");
    const [result , setResult] = useState("");

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f6b7985c-4f0e-4b01-aa4e-b95ff83cbc50");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("We have received your message. Thank you!");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return (
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-8">
            {/* Form Section */}
            <div className="w-full lg:w-96 shadow-lg rounded-lg bg-black p-3">
                <form className="space-y-3" onSubmit={handleSubmitForm}>
                    <div>
                        <input
                            type="text"
                            id="fullname"
                            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                            placeholder="Full Name"
                            name="fullname"
                            // value={fullName}
                            // onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                            placeholder="Email"
                            name="email"
                            // value={Email}
                            // onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="phone"
                            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                            placeholder="Phone"
                            name="phone"
                            // value={Phone}
                            // onChange={(e) => {setPhone(e.target.value)}}
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 text-white block w-full px-4 py-2 border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                            placeholder="Message"
                            name="message"
                            // value={message}
                            // onChange={(e) => {setMessage(e.target.value)}}
                        ></textarea>
                    <span className="text-sm text-green-500 font-AfacadFlux font-bold">{result}</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Map Section */}
            <div className="w-full h-72 lg:w-1/2">
                <div className="w-full h-64 lg:h-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.51087171675!2d77.31925240641961!3d28.52232767076855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1743771703273!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Form;