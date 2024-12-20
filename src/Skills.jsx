import './Skills.scss';

const Skills = () => {
    return (
        <div className='skills-container'>
        <h3 className='skills-title'>Technologies</h3>
        <div className='skills-line'></div>
        <div className='skills-logos'>
        <div> <img src="github.svg" alt="" /> </div>
        <div> <img src="react.svg" alt="" /> </div>
        <div> <img src="symfony.svg" alt="" /> </div>
        <div> <img  src="wordpress.svg" alt="" /> </div>
        </div>
        </div>
    ); 
}; 

export default Skills; 