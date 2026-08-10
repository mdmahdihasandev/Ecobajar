import React from 'react'
import Container from '../Components/Layuots/Container'
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <Container>
        <div>
           <div className=" my-[30px] w-full bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[280px_1fr] rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* Left info panel */}
        <div className="bg-white p-8 space-y-8 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="text-center space-y-3 pb-6 border-b border-gray-100">
            <div className="mx-auto w-10 h-10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-green-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              2715 Ash Dr. San Jose, South
              <br />
              Dakota 83475
            </p>
          </div>
 
          <div className="text-center space-y-3 pb-6 border-b border-gray-100">
            <div className="mx-auto w-10 h-10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-green-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Proxy@gmail.com
              <br />
              Help.proxy@gmail.com
            </p>
          </div>
 
          <div className="text-center space-y-3">
            <div className="mx-auto w-10 h-10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-green-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              (219) 555-0114
              <br />
              (164) 333-0487
            </p>
          </div>
        </div>


 
        {/* Right form panel */}
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Just Say Hello!
          </h2>
          <p className="text-sm text-gray-400 mt-3 mb-8 leading-relaxed max-w-md">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>
 
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              />
            </div>
 
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border  border-gray-200  px-4 py-3 text-sm text-gray-700 placeholder-gray-400 resize-none  focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
 
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
 
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold px-8 py-3.5 text-sm shadow-lg shadow-green-500/30 transition-colors w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>


        <div className='my-[30px]'>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.387499066138!2d90.25802581696932!3d23.847252811219242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebac87241eab%3A0x2d6f2da065b1ddc1!2sSavar%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1786359324476!5m2!1sen!2sbd"
  width= "100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
></iframe>

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.387499066138!2d90.25802581696932!3d23.847252811219242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebac87241eab%3A0x2d6f2da065b1ddc1!2sSavar%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1786359324476!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
        </div>

      </Container>
    </div>
  )
}

export default Contact