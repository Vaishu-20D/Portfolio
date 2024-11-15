import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <>
      <div className=" container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"

        >
          <a href='https://www.google.com' target='blank' className="items">
            <FaInstagram className='icons' />
          </a>
          <a href='https://www.linkdin.com' target='blank' className="items">
            <CiLinkedin className='icons' />
          </a>
          <a href='https://www.github.com' target='blank' className="items">
            <FaGithub className='icons' />
          </a>
          <a href='mailto:vaishnaviborle67@gmail.com' target='blank' className="items">
            <CgMail className='icons' />
          </a>

        </div>
      </div>
    </>
  )
}

export default Contact
