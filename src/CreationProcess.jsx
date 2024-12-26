import './CreationProcess.scss';

const CreationProcess = () => {
    return (
        <div className='creation-process-container'>
            <h3 className='creation-process-title'> processus de création</h3>
            <div className='creation-process-line'></div>

            <div className='creation-process-pictures-container'>
                <div className='zoning-container'>
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
                <div className='creation-process-pictures-container'>
                <div className='wireframe-container'>
                <div className='wireframe-title-container'>
                    <div className='wireframe-title'> Wireframes </div>
                    <div className='wireframe-title-line'></div>
                    <div className='wireframe-expectation'>
                        <p>Un wireframe est une représentation simplifiée qui intervient 
                            après l’étape du zoning dans le processus de conception d’une page web ou d’une application. </p>
                            <p>Alors que le zoning délimite les grandes zones fonctionnelles de la page (comme l’en-tête ou le pied de page), le wireframe va plus loin en détaillant l’organisation précise des éléments à l’intérieur de ces zones 
                            (boutons, menus, images, textes), sans inclure les aspects visuels comme les couleurs ou les styles.</p>
                            <p>C’est une étape intermédiaire pour valider la structure et l’expérience utilisateur.</p>
                    </div>
                </div>
                <img className="wireframe-picture" src="wireframes.svg" alt="" />
                </div>
            </div>
            </div>
        
        </div>
    );
};

export default CreationProcess;