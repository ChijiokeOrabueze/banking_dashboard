import { MenuItems } from "./side-bar.types";




export const menuItems:MenuItems[] = [
    {menuItem: "Dashboard", icon:"dashboard", pageNum:1},
    {menuItem: "Invoices", icon:"invoices", pageNum:2},
    {menuItem: "Messages", icon:"messages", additionalInfo:5, pageNum:3},
    {menuItem: "My Wallet", icon:"wallet", pageNum:4},
    {menuItem: "Activity", icon:"activity", pageNum:5},
    {menuItem: "Analytics", icon:"analytics", pageNum:6},
]

export const footMenuItems:MenuItems[] = [
    {menuItem: "Get Help", icon:"help", pageNum:7},
    {menuItem: "Settings", icon:"settings", pageNum:8}
]