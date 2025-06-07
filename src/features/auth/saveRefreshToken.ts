import Cookies from 'js-cookie'

const saveRefreshToken = (refreshToken: string) => Cookies.set('refreshToken', refreshToken, { expires: 29 })

export default saveRefreshToken;