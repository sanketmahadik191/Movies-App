import { useEffect } from 'react'
// import './App.css'
// import {BrowserRouter} from 'react-router-dom'
// import fetchDataFromApi from './utils/api'
// import { useSelector,useDispatch } from 'react-redux';
// import { getApiConfiguration } from './store/HomeSlice';
// import Home from './pages/Home/Home';
// import {Routes ,Route} from 'react-router-dom'

// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Details from './pages/Details/Details';
// import SearchResult from './pages/SearchResult/SearchResult'
// import Explore from './pages/explore/Explore'
// import PageNotFound from './pages/404/PageNotFound';


function App() {

  // const dispatch = useDispatch();
  // const {url} =useSelector((state)=> state.home);
 

  // useEffect(()=>{
  //   apitesting();
  // })

  // const apitesting = () => {
  //   fetchDataFromApi('/movie/popular')
  //   .then((res)=>{
  //     console.log(res);
  //     dispatch(getApiConfiguration(res))
  //   })
  // }

  return (
     <h1>Movies App</h1>
  //  <BrowserRouter>
  //   <Home></Home>
  //  <Header></Header>
  //    <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/:mediaTYpe/:id" element={<Details />} />
  //         <Route path="/search/:query" element={<SearchResult />} />
  //         <Route path="/explore/:mediaType" element={<Explore />} />
  //         <Route path="*" element={<PageNotFound />} />
  //    </Routes>
  //    <Footer></Footer>
  //  </BrowserRouter>
  )
}

export default App
