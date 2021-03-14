export const PORT = process.env.GRAPHQL_SERVER_PORT
export const PATH = process.env.GRAPHQL_SERVER_PATH || '/'
export const HOST = process.env.GRAPHQL_SERVER_HOST
export const HOST_URI = process.env.HOST_URI || `http://${HOST}:${PORT}`
export const AUTH_LOGIN_UI_URI = process.env.AUTH_LOGIN_UI_URI || '/auth'
export const AUTH_NEW_PASS_UI_URI =
	process.env.AUTH_NEW_PASS_UI_URI || '/auth/new_pass'
export const AUTH_VERIFY_CODE_URI =
	process.env.AUTH_VERIFY_CODE_URI || '/auth/verify'
export const AUTH_CONFIRM_CODE_UI_URI =
	process.env.AUTH_CONFIRM_CODE_UI_URI || '/auth/confirm-code'
export const AUTH_CHANGE_PASS_UI_URI =
	process.env.AUTH_CHANGE_PASS_UI_URI || '/auth/change-pass?code='

export const BODYPARSER_JSON_LIMIT = '5mb'

export const AVATAR_HEIGHT = 512
export const AVATAR_WIDTH = 512

export const CLOUD_NAME = process.env.CLOUD_NAME
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET
export const CLOUD_IMG_FOLDER = process.env.CLOUD_IMG_FOLDER
