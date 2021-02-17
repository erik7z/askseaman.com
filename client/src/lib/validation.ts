import * as yup from 'yup'

// const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const regValidation = yup.object({
	email: yup
		.string()
		.required('email is required')
		.email('*Email is not valid'),
	// .matches(emailRegexp, '*Email is not valid'),
	name: yup
		.string()
		.min(2, '*Names must have at least 2 characters')
		.max(16, "*Names can't be longer than 16 characters")
		.required(),
	surname: yup
		.string()
		.min(2, '*Names must have at least 2 characters')
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
