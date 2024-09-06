import '../styles/testimonials.css'
import { Title } from './text'
export default function Testimonials() {
    return (
        <>
        <Title text={"TESTIMONIALS"}/>
        <div className="row row-cols-1 row-cols-md-4 g-4 container testimonials-wrapper">

            <div className="col">
                <div className="card testimonial-card w-80 h-100 d-flex flex-column justify-content-center align-items-center">
                    <img className="testimonial-img" src="../../public/testimonial1.png" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Jay</h5>
                        <p className="card-text">I love using Expense Tracker! It is so easy to use and helps me keep track of my spending</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card testimonial-card w-80 h-100 d-flex flex-column justify-content-center align-items-center">
                    <img className="testimonial-img" src="https://www.menspharmacy.co.uk/static/version1718806821/frontend/menspharmacy/default/en_GB/Magento_Theme/images/homepage_banner_m.jpg" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Alex</h5>
                        <p className="card-text">I love using Expense Tracker! It is so easy to use and helps me keep track of my spending</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card testimonial-card w-80 h-100 d-flex flex-column justify-content-center align-items-center">
                    <img className="testimonial-img" src="https://imgcdn.stablediffusionweb.com/2024/4/10/055c551f-90af-42d3-9909-7ee76835ad2b.jpg" />
                    <div className="card-body text-center">
                        <h5 className="card-title">John</h5>
                        <p className="card-text">I love using Expense Tracker! It is so easy to use and helps me keep track of my spending</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card testimonial-card w-80 h-100 d-flex flex-column justify-content-center align-items-center">
                    <img className="testimonial-img" src="https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Isabel</h5>
                        <p className="card-text">I love using Expense Tracker! It is so easy to use and helps me keep track of my spending</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


