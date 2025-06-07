import Cookies from "js-cookie";

const deleteRefreshToken = () => Cookies.remove('refreshToken')

export default deleteRefreshToken