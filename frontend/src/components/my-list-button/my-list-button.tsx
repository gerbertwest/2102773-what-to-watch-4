import { setFavorite, unsetFavorite } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/';
import { getFavoriteFilms } from '../../store/favorite-films-data/selectors';

type MyListButtonProps = {
  id: string;
};

function MyListButton({ id }: MyListButtonProps) {
  const dispatch = useAppDispatch();
  const myFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = myFilms.map((film) => film.id).includes(id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(unsetFavorite(id));
    } else {
      dispatch(setFavorite(id));
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? (
          <use xlinkHref="#in-list"></use>
        ) : (
          <use xlinkHref="#add"></use>
        )}
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
