import * as yup from 'yup'
// import { mixed } from 'yup'

// const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const regValidation = yup.object({
	email: yup
		.string()
		.required('email is required')
		.email('*Email is not valid'),
	// .matches(emailRegexp, '*Email is not valid'),
	name: yup
		.string()
		.min(5, '*Names must have at least 5 characters')
		.max(16, "*Names can't be longer than 16 characters")
		.required(),
	surname: yup
		.string()
		.min(5, '*Names must have at least 5 characters')
		.max(16, "*Names can't be longer than 16 characters")
		.required(),
	rank: yup.string().required(),
	password: yup.string().required('Password is required'),
	password2: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	terms: yup.bool().oneOf([true], 'Agreement approval is required'),
})

export const signInValidation = yup.object({
	email: yup
		.string()
		.required('email is required')
		.email('*Email is not valid'),
	// .matches(emailRegexp, '*Email is not valid'),
	password: yup.string().required('Password is required'),
})

export const askQuestionValidation = yup.object({
	title: yup
		.string()
		.required('Title is required')
		.min(3, '*Titles must have at least 3 characters')
		.max(64, "*Title can't be longer than 64 characters"),
	tags: yup.string().required('Tags are required'),
	text: yup.string().required('Question description is required'),
})

export const userSettingsValidation = yup.object({
	name: yup
		.string()
		.min(5, '*Names must have at least 5 characters')
		.max(16, "*Names can't be longer than 16 characters")
		.required(),
	surname: yup
		.string()
		.min(5, '*Names must have at least 5 characters')
		.max(16, "*Names can't be longer than 16 characters")
		.required(),
	rank: yup.string().required(),
	// avatar: mixed().test('fileSize', 'The file is too large', (value) => {
	// 	console.log(value)
	// 	return true
	// 	// if (!value.length) return true // attachment is optional
	// 	// return value[0].size <= 2000000
	// }),
	password: yup.string().required('Password is required'),
	password2: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	description: yup.string().required('Tell few words about yourself'),
})

export const userTextValidation = yup.object({
	text: yup.string().required('Text is required'),
})

export const validateImageUpload = (file: File) => {
	const fileIsValidImage =
		file.type === 'image/jpeg' || file.type === 'image/png'
	const fileSizeInMB = file.size / 1024 / 1024
	const fileIsVaildSize = fileSizeInMB < 1

	if (!fileIsValidImage)
		throw new Error("You're only able to upload valid JPG or PNG files!")

	if (!fileIsVaildSize)
		throw new Error(
			"You're only able to upload valid images files of under 1MB in size!"
		)
	return true
}
