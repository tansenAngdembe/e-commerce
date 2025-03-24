import {useForm} from "react-hook-form"
import { Mail, Phone } from "lucide-react";

const Contact = () => {
 const {register
  
 } = useForm()

  return (
    <section className="flex  items-center justify-around p-8 bg-gray-100">
      <div className="flex flex-col gap-10 w-full max-w-lg text-gray-800">
        <div className="flex flex-col gap-2  p-6 rounded-xl">
          <h1 className="flex items-center gap-3 text-xl font-semibold">
            <Phone className="text-orange-700" /> Call To Us
          </h1>
          <p>We are available 24/7, 7 days a week</p>
          <p className="font-medium">Phone: +977-9080766151</p>
        </div>

        <div className="flex flex-col gap-2  p-6 rounded-xl ">
          <h1 className="flex items-center gap-3 text-xl font-semibold">
            <Mail className="text-orange-700" /> Write To Us
          </h1>
          <p>Fill out the form and we will contact you within 24 hours.</p>
          <p className="font-medium">Email: customer@quickkart.com</p>
          <p className="font-medium">Support: support@quickkart.com</p>
        </div>
      </div>

      <div className="mt-10 w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Get In Touch
        </h2>
        <form action="#" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none "
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            className="p-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-700 text-white p-3 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
