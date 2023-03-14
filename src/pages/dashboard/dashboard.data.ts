import { Status } from "./components/StatusBar";
import { TransactionType } from "./components/Transaction";



export const statsData = [
    {
        icon: "customers",
        title: "Customers",
        value: "220k"
    },
    {
        icon: "remmitance",
        title: "Remmitance",
        value: "250k"
    },
    {
        icon: "donation",
        title: "Donation",
        value: "620k"
    },
    {
        icon: "watchtime",
        title: "Watchtime",
        value: "500k"
    },

]

const getImage = (icon:string)=>`/assets/dashboard/${icon}.svg`;

export const transactionData = [
    {
        image: getImage("bitcoin"),
        description: "Bitcoin Transactions",
        date: "Jan 16, 2020",
        cardNumber: "4563739474947",
        type: "transfer" as TransactionType,
        status: "Success" as Status,
        amount: "340.00"
    },
    {
        image: getImage("anatalia"),
        description: "Sent to anitonia",
        date: "Jan 16, 2020",
        cardNumber: "84785947368348",
        type: "transfer" as TransactionType,
        status: "Pending" as Status,
        amount: "200.00"
    },
    {
        image: getImage("paypal"),
        description: "Withdraw Paypal",
        date: "Jan 16, 2020",
        cardNumber: "84748483948948",
        type: "deposit" as TransactionType,
        status: "Success" as Status,
        amount: "210.00"
    },
]