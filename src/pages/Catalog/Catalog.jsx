// import { useEffect } from "react"
import GalleryItem from "../../components/GalleryItem/GalleryItem"
import SearchForm from "../../components/SearchForm/SearchForm"
// import { useDispatch } from "react-redux"
// import { getCarsThunk } from "../../redux/thunks"
import { getCars } from "../../services/api"


const Catalog = () => {
  // const dispatch = useDispatch();

  console.log(getCars())
  // useEffect(()=>{
  //   dispatch(getCarsThunk)
  // },[dispatch])
  return (
    <>
    <SearchForm/>
    <ul>
      <GalleryItem/>
    </ul>
    </>
  )
}

export default Catalog
