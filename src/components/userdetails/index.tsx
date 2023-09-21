import React from 'react'
import './index.scss'

const UserDetails = () => {
  return (
    <div className='userDetails mt-8 p-6'>
      <div className='main'>
        <h6>Personal Information</h6>
        <div className='grid grid-cols-5 gap-4 mt-5 gridMobile'>
          <div>
            <p>FULL NAME</p>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <h6>07060780922</h6>
          </div>
          <div>
            <p>EMAIL ADDRESS</p>
            <h6>grace@gmail.com</h6>
          </div>
          <div>
            <p>BVN</p>
            <h6>34356477484884</h6>
          </div>
          <div>
            <p>GENDER</p>
            <h6>Female</h6>
          </div>
          <div>
            <p>MARITAL STATUS</p>
            <h6>Single</h6>
          </div>
          <div>
            <p>CHILDREN</p>
            <h6>None</h6>
          </div>

          <div>
            <p>TYPE OF RESIDENCE</p>
            <h6>Parent's Apartment</h6>
          </div>
        </div>
      </div>


      <div className='main'>
        <h6 className='mt-5'>Education and Employment</h6>
        <div className='grid grid-cols-4 gap-4 mt-5 gridMobile'>
          <div>
            <p>LEVEL OF EDUCATION</p>
            <h6>B.Sc</h6>
          </div>
          <div>
            <p>EMPLOYMENT STATUS</p>
            <h6>Employed</h6>
          </div>
          <div>
            <p>SECTOR OF EMPLOYMENT</p>
            <h6>FinTech</h6>
          </div>
          <div>
            <p>DURATION OF EMPLOYMENT</p>
            <h6>2 years</h6>
          </div>
          <div>
            <p>OFFICE EMAIL</p>
            <h6>grace@lendsqr.com</h6>
          </div>
          <div>
            <p>MONTHLY INCOME</p>
            <h6>₦200,000.00- ₦400,000.00</h6>
          </div>
          <div>
            <p>LOAN REPAYMENT</p>
            <h6>40,000</h6>
          </div>
        </div>
      </div>

      <div className='main'>
        <h6 className='mt-5'>Socials</h6>
        <div className='grid grid-cols-4 gap-4 mt-5 gridMobile'>
          <div>
            <p>TWITTER</p>
            <h6>@grace_effiom</h6>
          </div>
          <div>
            <p>FACEBOOK</p>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <p>INSTAGRAM</p>
            <h6>@grace_effiom</h6>
          </div>

        </div>
      </div>

      <div className='main'>
        <h6 className='mt-5'>Guarantor</h6>
        <div className='grid grid-cols-4 gap-4 mt-5 gridMobile'>
          <div>
            <p>FULL NAME</p>
            <h6>Debby Ogana</h6>
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <h6>07060780922</h6>
          </div>
          <div>
            <p>EMAIL ADDRESS</p>
            <h6>debby@gmail.com</h6>
          </div>
          <div>
            <p>RELATIONSHIP</p>
            <h6>Sister</h6>
          </div>
        </div>
      </div>


    </div>
  )
}

export default UserDetails;