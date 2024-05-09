import Header from "./Header"
import useFetchData from "../hooks/useFetchData";
import ResCardContainer from "./ResCardContainer"
const Browse = () => {

  useFetchData();

  return (
    <div>
    <Header />
    <ResCardContainer />
    </div>
  )
}

export default Browse