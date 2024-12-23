import  './CreationProcess.scss';

const CreationProcess = () => {
    return (
        <div className='creation-process-container'>
        <h3 className='creation-process-title'> processus de création</h3>
        <div className='creation-process-line'></div>
        
        <div className='creation-process-pictures-container'>
            <div className='zoning-title'> Zoning </div>
            <div className='zoning-title-line'></div>
            <img className="zoning-picture"src="zoning.svg" alt="" />
        </div>
        </div>
    );
};

export default CreationProcess;