
import { useSelector } from 'react-redux'
import Catalog from '../Catalog/Catalog'
import { selectFavoriteCars } from '../../redux/selectors'
import NoDataPage from '../../components/NoDataPage / NoDataPage';


const Favorites = () => {
  const favoritesList = useSelector(selectFavoriteCars);
  return (
    <div>
      {favoritesList.length ? <Catalog/> : <NoDataPage/>}
    </div>
  )
}

export default Favorites
