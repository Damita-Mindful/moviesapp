import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img className={styles.movieImage} src={imgUrl} alt={movie.title} />
        <div className={styles.title}>{movie.title}</div>
      </Link>
    </li>
  );
}
