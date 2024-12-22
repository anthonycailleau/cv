import './Skills.scss';

const Skills = () => {
    return (
        <div className='skills-container'>
            <h3 className='skills-title'> Compétences </h3>
            <div className='skills-line'></div>
            <ul className='skills-list'>
            <li className='skill-item'>
                <img src="coding.png" alt="languages" className='skill-logo' />
                <div className='skill-text'>Développement web: HTML, CSS/SCSS, JavaScript, React, Symfony</div>
            </li>
            <li className='skill-item'>
                <img src="responsive-design.png" alt="responsive" className='skill-logo' />
                <div className='skill-text'>Responsive design: Création de sites adaptés à tous les écran</div>
            </li>
            <li className='skill-item'>
                <img src="ui-design.png" alt="design" className='skill-logo' />
                <div className='skill-text'>Graphisme: Adobe Photoshop, Illustrator</div>
            </li>
            {/* <li className='skill-item'>
                <img src="" alt="" className='skill-logo' />
                Nouvelles technologies: Expertise dans les écosystèmes numériques
            </li>
            <li className='skill-item'>
                <img src="" alt="" className='skill-logo' />
                Optimisation UX/UI: Création d'interfaces intuitives et performantes
            </li> */}
        </ul>
        </div>
    );
};

export default Skills; 