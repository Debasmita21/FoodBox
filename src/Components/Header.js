import { logo } from "../utils/constants"

const Header = () => {
  return (
    <div className="flex bg-gradient-to-r from-green-800 to-gray-900 h-16">
    <img className="h-[45px] m-2" src={logo} alt="logo"/>
    </div>
  )
}

export default Header