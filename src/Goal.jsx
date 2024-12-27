import './Goal.scss';

const Goal = () => {
    return (
        <div className='goal-container'>
            <h3 className='goal-title'>Définition des objectifs et des besoins</h3>
            <div className='goal-line'></div>
            <div className='check-list'> <img src="goals.png" alt="" /></div>
            <div className='goal-explaination'>
                <p>
                    Chaque projet commence par une phase de réflexion :
                </p>
                <ul>
                    <li><strong>Déterminer les objectifs</strong> : Pourquoi ce projet est-il nécessaire ?</li>
                    <li><strong>Identifier le public cible</strong> : Définir qui utilisera le site (âge, métier, besoins spécifiques).</li>
                    <li><strong>Prendre en compte les contraintes</strong> : Budget, délais, technologies, et ressources disponibles.</li>
                </ul>
            </div>
        </div >
    );
};

export default Goal;