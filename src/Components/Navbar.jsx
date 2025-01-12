import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container nav_bar" 
            data-aos="fade-down"
            data-aos-duration="1000"
            >
                <div className="left nav_item">Portfolio</div>
                <div className="right">
                    <a href="#home" className="nav_item">Home</a>
                    <a href="#experiance" className="nav_item">Experiance</a>
                    <a href="#skills" className="nav_item">Skills</a>
                    <a href="#projects" className="nav_item">Project</a>
                    <a href="#contact" className="nav_item">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
