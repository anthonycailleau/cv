import './CreationProcess.scss';

const CreationProcess = () => {
    return (
        <div className='creation-process-container'>
            <h3 className='creation-process-title'> processus de création</h3>
            <div className='creation-process-line'></div>

            <div className='creation-process-pictures-container'>
                <div className='zoning-title-container'>
                    <div className='zoning-title'> Zoning </div>
                    <div className='zoning-title-line'></div>
                    <div className='zoning-expectation'>
                        <p>Le zoning est une étape clé dans un processus de création ou de conception, 
                            où l’on définit les zones principales d’un projet. </p><p>Cela peut concerner l’organisation 
                            spatiale (comme diviser un espace en sections fonctionnelles) ou la structuration d’éléments visuels 
                            (comme répartir les différentes parties d’une interface ou d’un design).</p>
                            <p>C’est une sorte de “plan général” 
                            pour visualiser comment les différentes parties se connecteront.</p>
                    </div>
                </div>
                <img className="zoning-picture" src="zoning.svg" alt="" />
            </div>
        </div>
    );
};

export default CreationProcess;