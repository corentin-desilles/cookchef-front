import styles from './Content.module.scss';
import Recipe from '../Recipe/Recipe';
import { data } from '../../data/recipes';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';

function Content() {
  const recipes = data;
  const [filter, setFilter] = useState('');

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <SearchBar setFilter={setFilter} />
        <div className={styles.grid}>
          {recipes
            .filter(r => r.title.toLowerCase().startsWith(filter))
            .map(r => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
