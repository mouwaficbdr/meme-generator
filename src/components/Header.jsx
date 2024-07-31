/* eslint-disable no-unused-vars */
import React from "react"
import logoIcon from "../assets/troll-face.png"

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoIcon} className="logo-icon" />
        <p className="logo-text">Meme Generator</p>
      </div>
      <span className="course-name">React Course - Project 3</span>
    </header>
  );
}
