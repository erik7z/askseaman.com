import cloudinaryClient from 'cloudinary'

cloudinaryClient.v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
})

export const cloudinary = {
	async upload(image: string) {
		const res = await cloudinaryClient.v2.uploader.upload(image, {
			folder: 'askseaman/',
		})

		return res.url
	},
}
