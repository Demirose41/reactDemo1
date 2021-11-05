import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetuoList';

function FavoritesPage(){
    const favoritesCTX =  useContext(FavoritesContext)

    let content;
    
    if(favoritesCTX.totalFavorites === 0) {
        content = <p>You got no favorites yet. Would you like to add some?</p>
    }else{
        content = <MeetupList meetups={favoritesCTX.favorites}/>
    }

    return (
        <section>
            <h1>Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;