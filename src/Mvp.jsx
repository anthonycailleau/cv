import './Mvp.scss';

const Mvp = () => {
    return (
        <div className='mvp-container'>
            <h3 className='mvp-title'> définition du mvp (minimum viable product)</h3>
            <div className='mvp-line'></div>
            <div className='pyramid'> <img src="pyramid.png" alt="" /></div>
            <div className='mvp-explaination'>
                <p>
                    Le <strong>MVP</strong> est une version simplifiée du projet, qui contient uniquement les fonctionnalités essentielles pour répondre aux besoins initiaux.
                </p>
                <h4> pourquoi un mvp ? </h4>
                <div className='mvp-explaination-line'></div>
                <ul>
                    <li><strong> Lancer </strong> rapidement la première version du projet. </li>
                    <li><strong> Recueillir </strong> des retours utilisateurs. </li>
                    <li><strong> Eviter </strong> de perdre du temps sur des foncionnalités secondaires. </li>
                </ul>
                <h4> les étapes </h4>
                <div className='mvp-explaination-line'></div>
                <ul>
                    <li><strong> Lister </strong> toutes les fonctionnalités. </li>
                    <li><strong> Garder </strong> seulement celles indispensables (navigation, formulaire...). </li>
                    <li><strong> Ajouter </strong> les extras après le lancement (mode sombre, animations...).  </li>
                </ul>
            </div>
        </div >
    );
};

export default Mvp;