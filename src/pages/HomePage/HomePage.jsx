import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <Header />
            <main className="homepage__main">
                <Navigation />

                <div className="homepage__content">

                    <div className="homepage__header">
                        <div className="homepage__avatar"/>
                        <div className="homepage__text-container">
                            <p className="homepage__text">Welcome, Alex</p>
                            <p className="homepage__text--blue">Your Next Eye Exam is up in <span className="homepage__text--red">2 Weeks</span></p>
                        </div>
                        <div className="homepage__button-container">
                            <button className="homepage__button">Read the screen</button>
                        </div> 
                    </div>

                    <div className="homepage__calendar-content">
                    </div>

                    <div className="homepage__education">
                        <h2 className="homepage__text-heading">Education</h2>
                        <div className="homepage__text-main">
                            <h2 className="homepage__text-subheading">Living with Low Vision: Tips for Home Safety</h2>
                            <p className="homepage__text-body">These simples changes can make it safer to get around your home and complete daily tasks when living with low vision...</p>
                            <p className="homepage__text-read-more">Read more</p>
                        </div>
                    </div>

                </div>
                
            </main>
        </>
    );
}

export default HomePage;