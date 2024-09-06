import { Spacer, SubTitle } from "./text"

function Features() {
    return (
        <>

            <div className="container-fluid">

                <div className="d-flex flex-row">

                    <img src="https://expense-tracker-mern.herokuapp.com/static/media/transactions.3a881004589d5f1a53be.png" alt="" width={500} height={700} style={{ marginLeft: '100px' }} />

                    <div className="d-flex justify-content-center align-items-center" style={{ height: '700px', translate: "200px" }}>
                        <SubTitle />
                    </div>

                </div>


                <div className="d-flex flex-row justify-content-center align-items-center">

                    <img src="../../public/expense-tracker-logo.png" alt="" width={100} height={100}
                        style={{ borderRadius: '50px' }} />

                </div>


                <div className="d-flex flex-row">

                    <div className="d-flex justify-content-center align-items-center" style={{ height: '700px', translate: "200px" }}>

                        <SubTitle />
                    </div>

                    <img src="https://expense-tracker-mern.herokuapp.com/static/media/trend.de4b5c0d5dce624687b1.png" alt="" width={500} height={700} style={{ marginLeft: '340px', marginTop: '-13px' }} />

                </div>

            </div>


            <Spacer />


            <div className="container-fluid">

                <div className="d-flex flex-row">

                    <div className="d-flex justify-content-center align-items-center" style={{ height: '700px', translate: "200px" }}>

                        <SubTitle />
                    </div>

                    <img src="https://expense-tracker-mern.herokuapp.com/static/media/chart-cat.3c551dc5b93f0ee43c47.png" alt="" width={500} height={700} style={{ marginLeft: '340px', marginTop: '-13px' }} />

                </div>

                <div className="d-flex flex-row justify-content-center align-items-center">

                    <img src="../../public/expense-tracker-logo.png" alt="" width={100} height={100}
                        style={{ borderRadius: '50px', marginTop: '-30px' }} />

                </div>


                <div className="d-flex flex-row">

                    <img src="https://expense-tracker-mern.herokuapp.com/static/media/calcform.f1284d0172b52d0eae84.png" alt="" width={500} height={700} style={{ marginLeft: '100px' }} />

                    <div className="d-flex justify-content-center align-items-center" style={{ height: '700px', translate: "200px" }}>
                        <SubTitle />
                    </div>

                </div>

                <Spacer />

            </div>

        </>
    )
}

export default Features
