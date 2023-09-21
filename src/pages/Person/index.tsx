import React from 'react'
import BackArrow from "../../images/backbutton.png"
import AppButton from '../../components/appbutton/appbutton'
import Avatar from "../../images/nudeavatar.png"
import Vector from "../../images/vector.png"
import VectorOne from "../../images/vector1.png"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "./index.scss"
import UserDetails from '../../components/userdetails/index.tsx'

const Person = () => {
  const submit = () => {
    console.log("clicked on button")
  }
  const submitTwo = () => {
    console.log("clicked on button two")
  }

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `General Details`,
      // children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Documents`,
      // children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Bank Details`,
      // children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: `Loans`,
      // children: `Content of Tab Pane 4`,
    },
    {
      key: '5',
      label: `Savings`,
      // children: `Content of Tab Pane 5`,
    },
    {
      key: '6',
      label: `App and System`,
      // children: `Content of Tab Pane 6`,
    },
  ];
  return (
    <div className='personMain'>
      <div className='flex mainDiv'>
        <img src={BackArrow} className="mr-4" alt="" />
        <p>Back to Users</p>
      </div>

      <div className='flex justify-between mt-6 personSub'>
        <h1>User Details</h1>
        <div className='personButtons'>
          <AppButton text="BLACKLIST USER" onClick={submit} className="blacklist mr-2" />
          <AppButton text="ACTIVATE USER" onClick={submitTwo} className="activate" />
        </div>
      </div>

      <div className='mt-6 userDetails px-9 pt-9 rounded'>
        <div className='w-full flex mainPerson flex-wrap'>
          <div className='flex first pr-12'>
            <img src={Avatar} alt="#" className='w-24 h-24 mr-6'/>
            <div className='pt-4'>
              <h6>Grace Effiom</h6>
              <p className='pt-2'>LSQFf587g90</p>
            </div>
          </div>

          <div className='second pl-12 pr-12 pt-6'>
            <p>User’s Tier</p>
            <div className='flex pt-2'>
              <img src={Vector} alt="#" />
              <img src={VectorOne} alt="#" />
              <img src={VectorOne} alt="#" />
            </div>
          </div>

          <div className='third pl-12 pt-4'>
            <h6>₦200,000.00</h6>
            <p className='pt-2'>9912345678/Providus Bank</p>
          </div>


        </div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='mt-12'/>
      </div>

      <UserDetails/>
    </div>
  )
}

export default Person