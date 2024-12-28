import './Technologies.scss';

const Technologies = () => {
    return (
        <div className='technologies-container'>
            <h3 className='technologies-title'> Technologies </h3>
            <div className='technologies-line'></div>
            <div className='technologies-logos'>
                <div> <img src="github.svg" alt="" /> </div>
                <div> <img src="react.svg" alt="" /> </div>
                <div> <img src="symfony.svg" alt="" /> </div>
                <div> <img src="wordpress.svg" alt="" /> </div>
            </div>
        </div>
    );
};

export default Technologies; 