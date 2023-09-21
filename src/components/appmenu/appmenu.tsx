import React from 'react'
import BadgePercent from "../../images/menuIcons/badge-percent.png"
import Bank from "../../images/menuIcons/bank.png"
import BriefCase from "../../images/menuIcons/briefcase.png"
import ChartBar from "../../images/menuIcons/chart-bar.png"
import ClipBoard from "../../images/menuIcons/clipboard-list.png"
import Coins from "../../images/menuIcons/coins-solid.png"
import Galaxy from "../../images/menuIcons/galaxy.png"
import Handshake from "../../images/menuIcons/handshake-regular.png"
import Home from "../../images/menuIcons/home.png"
import Icon from "../../images/menuIcons/icon.png"
import Loan from "../../images/menuIcons/loan.png"
import PiggyBank from "../../images/menuIcons/piggy-bank.png"
import Sack from "../../images/menuIcons/sack.png"
import Scroll from "../../images/menuIcons/scroll.png"
import Sliders from "../../images/menuIcons/sliders.png"
import UserCheck from "../../images/menuIcons/user-check.png"
import UserCog from "../../images/menuIcons/user-cog.png"
import UserFriends from "../../images/menuIcons/user-friends.png"
import UserTimes from "../../images/menuIcons/user-times.png"
import Users from "../../images/menuIcons/users.png"
import type { MenuProps } from 'antd'
import { useNavigate } from "react-router-dom"
import { Menu } from 'antd'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const map = {
    '9': "/dashboard",
    '10': "/dashboard/user"
}

const items: MenuProps['items'] = [

    getItem('Switch Organization', 'sub2', <img src={BriefCase} alt="" />, [
        getItem('Option 9', '9', <img src={Users} alt="" />),
        getItem('Option 10', '10', <img src={BriefCase} alt="" />),
        getItem('Option 11', '11', <img src={BriefCase} alt="" />),
        getItem('Option 12', '12', <img src={BriefCase} alt="" />),
    ]),

    getItem('Dashboard', 'sub3', <img src={Home} alt="" />),

    getItem('CUSTOMERS', 'customers', null, [
        getItem('Users', '13', <img src={Users} alt="" />),
        getItem('Guarantors', '14', <img src={UserFriends} alt="" />),
        getItem('Loans', '15', <img src={Sack} alt="" />),
        getItem('Decision Models', '16', <img src={Handshake} alt="" />),
        getItem('Savings', '17', <img src={PiggyBank} alt="" />),
        getItem('Loan Requests', '18', <img src={Loan} alt="" />),
        getItem('Whitelist', '19', <img src={UserCheck} alt="" />),
        getItem('Karma', '20', <img src={UserTimes} alt="" />),], 'group'),

    getItem('BUSINESSESS', 'business', null, [
        getItem('Organization', '21', <img src={BriefCase} alt="" />),
        getItem('Loan Products', '22', <img src={Loan} alt="" />),
        getItem('Saving Products', '23', <img src={Bank} alt="" />),
        getItem('Fees and Charges', '24', <img src={Coins} alt="" />),
        getItem('Transactions', '25', <img src={Icon} alt="" />),
        getItem('Services', '26', <img src={Galaxy} alt="" />),
        getItem('Service Account', '27', <img src={UserCog} alt="" />),
        getItem('Settlements', '28', <img src={Scroll} alt="" />),
        getItem('Reports', '29', <img src={ChartBar} alt="" />),], 'group'),

    getItem('SETTINGS', 'settings', null, [
        getItem('Preference', '30', <img src={Sliders} alt="" />),
        getItem('Fees and Pricing', '31', <img src={BadgePercent} alt="" />),
        getItem('Audit Logs', '32', <img src={ClipBoard} alt="" />),], 'group'),
];


const AppMenu = () => {
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        const path = map[e.key]
        navigate(path);

    };
  return (
    <>
    <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                </>
  )
}

export default AppMenu