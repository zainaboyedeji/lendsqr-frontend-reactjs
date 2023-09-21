import React from 'react'
import Logo from "../../images/logo.svg"

const CompanyLogo = ({className}) => {
  return (
    <div className={className}>
        <img src={Logo} alt="Logo"/>
    </div>
  )
}

export default CompanyLogo