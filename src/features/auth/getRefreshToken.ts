import Cookies from "js-cookie"

const getRefreshToken = () => Cookies.get('refreshToken')

export default getRefreshToken