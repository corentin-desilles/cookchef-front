import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import { useState, useEffect, useContext } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Loading from '../../components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL_API);
        if (response.ok && !cancel) {
          const recipes = await response.json();
          setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
        }
      } catch (e) {
        console.log('ERREUR');
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    fetchRecipes();
    return () => (cancel = true);
  });

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <SearchBar setFilter={setFilter} />
        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter(r => r.title.toLowerCase().startsWith(filter))
              .map(r => (
                <Recipe key={r._id} title={r.title} image={r.image} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
