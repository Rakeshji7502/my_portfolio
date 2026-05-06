import React from "react";
import { motion } from "framer-motion"

function Contact() {
    return (
        <section className="py-20 bg-gray-950 text-white" id="contact">
            <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

            <motion.form
                className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    className=" w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 ring-blue-500" />

                <input
                    type="email"
                    placeholder="Your Email"
                    className=" w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 ring-blue-500" />

                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 ring-blue-500 h-32 resize-none" />
                <motion.button
                    type="submit"
                    className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </section>
    );
}

export default Contact;
