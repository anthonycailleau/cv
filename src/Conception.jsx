import './Conception.scss';

const Conception = () => {
    return (
        <div className='conception-container'>
            <h3 className='conception-title'> conception fonctionnelle et visuelle </h3>
            <div className='conception-line'></div>
            <div className='ux-design'> <img src="ux-design.png" alt="" /></div>
            <div className='conception-explaination'>
                <p>
                    Cette <strong>étape</strong> transforme les idées en structures visuelles et organisationnelles claires,
                    en préparant à la fois la navigation et le design global du site.
                </p>
                <div className='conception-slider'>
                    <div className='conception-slide'>
                        <h4> sitemap (arborescence du site) </h4>
                        <div className='conception-explaination-line'></div>
                        <ul>
                            <li><strong> Définir </strong> une structure logique pour les pages afin de faciliter la navigation. </li>
                            <i>Exemple : <strong>Accueil → Produits → À propos → Blog → Contact</strong></i>
                        </ul>
                    </div>
                    <div className='conception-slide'>
                        <h4> zoning (structure des zones principales)</h4>
                        <div className='conception-explaination-line'></div>
                        <ul>
                            <li><strong> Organisation </strong> des grandes zones d'une page (en-tête, contenu, pied de page...). </li>
                            <li><strong> Outil simple </strong> pour esquisser rapidement la disposition des éléments sans entrer dans les détails. </li>
                            <i> Objectif : <strong> Identifier clairement clairement où chaque élément principal se positionne </strong></i>
                        </ul>
                    </div>
                    <div className='conception-slide'>
                        <h4> wireframes (maquettes fonctionnelles)</h4>
                        <div className='conception-explaination-line'></div>
                        <ul>
                            <li><strong> Affiner </strong> les zones définies dans le zoning pour représenter précisément l'emplacement des éléments (textes, images, boutons, menus). </li>
                            <li><strong> Les wireframes </strong> se concentrent sur la structure et les fonctionnalités, sans détails graphiques. </li>
                            <i> Exemple : <strong> un schéma en noir et blanc montrant les positions des éléments clés. </strong></i>
                        </ul>
                    </div>
                    <div className='conception-slide'>
                        <h4> charte graphique </h4>
                        <div className='conception-explaination-line'></div>
                        <ul>
                            <li><strong> Étape  </strong> où l'aspect visuel du projet prend vie : </li>
                            <li className='wireframe'><strong> Les wireframes </strong> se concentrent sur la structure et les fonctionnalités, sans détails graphiques. </li>
                            <li className='wireframe'><strong>Choix des couleurs, des typographies et des styles graphiques</strong> pour refléter l'identité visuelle du projet</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Conception;