import Footer from "../components/footer";
import Header from "../components/header";
import { Spacer, Title } from "../components/text";

export default function About() {
    return (
        <div>
            <Header />
            <Spacer marginTop={'80px'} />
            <div className="d-flex flex-row">

                <div style={{ width: '60%' }}>
                    <Title text={'ABOUT US ?'} textAlign={'left'} marginLeft={'110px'} />

                    <Title text={'Expense Tracker has helped me identify areas where I can cut back and save more money. It is a must-have for anyone looking to get their finances in order.'} textAlign={'left'} marginLeft={'110px'} fontsize={'20px'} />
                    <Spacer marginTop={'20px'} />

                    <Title text={'Expense Tracker has helped me identify areas where I can cut back and save more money. It is a must-have for anyone looking to get their finances in order.'} textAlign={'left'} marginLeft={'110px'} fontsize={'20px'} />
                    <Spacer marginTop={'20px'} />

                    <Title text={'Expense Tracker has helped me identify areas where I can cut back and save more money. It is a must-have for anyone looking to get their finances in order.'} textAlign={'left'} marginLeft={'110px'} fontsize={'20px'} />
                    <Spacer marginTop={'20px'} />
                </div>

                <div>
                    <img src="../../public/expense-aboutUs.png" alt="" width={400} height={400} />
                </div>

            </div>


            <Title textAlign={"center"} text={'TECH STACK'}></Title>

            <div className="d-flex flex-row justify-content-center align-items-center p-2">
                <img src="../../public/mongodbLogo.png" alt="" width={50} height={50} style={{ margin: '12px' }} />
                <img src="../../public/expressjsLogo.png" alt="" width={50} height={50} style={{ margin: '12px' }} />
                <img src="../../public/reactjsLogo.png" alt="" width={50} height={50} style={{ margin: '12px' }} />
                <img src="../../public/nodejsLogo.png" alt="" width={50} height={50} style={{ margin: '12px' }} />
            </div>

            <Spacer marginTop={'20px'} />

            <Footer />

        </div>

    )
}

