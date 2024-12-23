import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className='about-me-container'>
            <h3 className='about-me-title'> À propos de moi </h3>
            <div className='about-me-line'></div>
            <div className='about-me-presentation-container'>
            <img className='about-me-picture' src="anthony.jpg" alt="photo d'anthony" />
            <div className='about-me-text'>
                <p>
                    Développeur Junior spécialisé en JavaScript et React,
                    je vous propose de vous accompagner dans la création
                    de sites web dynamiques et évolutifs.
                </p>
                <p>
                    Mon objectif est
                    de concevoir des solutions responsive, adaptées à tous
                    types d’appareils (téléphone, tablette, ordinateur),
                    afin d'offrir une expérience utilisateur optimale.
                </p>
                <p>
                    Passioné par le design, je veillerai à ce que chaque
                    site soit personnalisé.
                </p>
            </div>
            </div>
        </div >
    );
};

export default AboutMe; 