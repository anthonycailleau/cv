import './UserStories.scss';

const UserStories = () => {
    return (
        <div className='user-stories-container'>
            <h3 className='user-stories-title'> Création des user stories </h3>
            <div className='user-stories-line'></div>
            <div className='book'> <img src="book.png" alt="" /></div>
            <div className='user-stories-explaination'>
                <h4> Qu'est ce qu'une user stories ? </h4>
                <div className='user-stories-explaination-line'></div>
                <p>
                    Les user stories servent à définir les besoins du projet du point de vue de l’utilisateur final.
                </p>
                <ul>
                    <li> <strong>“En tant qu’utilisateur</strong>, je veux pouvoir créer un compte pour sauvegarder mes préférences.” </li>
                    <li> <strong>“En tant qu’administrateur</strong>, je veux accéder à un tableau de bord pour suivre les commandes.” </li>
                </ul>
            </div>
        </div >
    );
};

export default UserStories;