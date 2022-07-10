import cloudinaryClient from 'cloudinary'
import {
	AVATAR_WIDTH,
	AVATAR_HEIGHT,
	CLOUD_NAME,
	CLOUD_API_KEY,
	CLOUD_API_SECRET,
	CLOUD_IMG_FOLDER,
} from '../../globals'

cloudinaryClient.v2.config({
	cloud_name: CLOUD_NAME,
	api_key: CLOUD_API_KEY,
	api_secret: CLOUD_API_SECRET,
})

export const cloudinary = {
	async upload(image: string) {
		const res = await cloudinaryClient.v2.uploader.upload(image, {
			folder: CLOUD_IMG_FOLDER,
			transformation: [
				{
					width: AVATAR_WIDTH,
					height: AVATAR_HEIGHT,
					gravity: 'face',
					crop: 'fill',
				},
			],
		})

		return res.url
	},
}
