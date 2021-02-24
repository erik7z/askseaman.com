import { FormikHelpers } from 'formik'
import {
	FieldError,
	AnswerQuestionMutationFn,
	AddCommentMutationFn,
} from '../../../types/generated-frontend'

import { normalizeErrors } from './../../../lib/helpers'

export type FormikSubmit<SubmitMutationType> = (
	topicId: string,
	submitMutation: SubmitMutationType,
	successFn: Function,
	values: { text: string },
	formikHelpers: FormikHelpers<{ text: string }>
) => void | Promise<any>

export const addCommentHandler: FormikSubmit<AddCommentMutationFn> = async (
	topicId,
	submitMutation: AddCommentMutationFn,
	successFn,
	values,
	{ setSubmitting, setErrors, resetForm }
) => {
	setSubmitting(true)

	const { data } = await submitMutation({
		variables: {
			data: {
				nodeId: topicId,
				text: values.text,
			},
		},
	})

	const submitResponse = data?.AddComment

	if (submitResponse) {
		if (submitResponse.__typename === 'FormError') {
			const formErrors = submitResponse.errors as FieldError[]
			setErrors(normalizeErrors(formErrors))
		}
		if (submitResponse.__typename === 'Comment') {
			resetForm()
			successFn(submitResponse.topic?.comments)
		}
	}
	setSubmitting(false)
}

export const answerQuestionHandler: FormikSubmit<AnswerQuestionMutationFn> = async (
	topicId,
	submitMutation: AnswerQuestionMutationFn,
	successFn,
	values,
	{ setSubmitting, setErrors, resetForm }
) => {
	setSubmitting(true)

	const { data } = await submitMutation({
		variables: {
			data: {
				nodeId: topicId,
				text: values.text,
			},
		},
	})

	const submitResponse = data?.AnswerQuestion

	if (submitResponse) {
		if (submitResponse.__typename === 'FormError') {
			const formErrors = submitResponse.errors as FieldError[]
			setErrors(normalizeErrors(formErrors))
		}
		if (submitResponse.__typename === 'Answer') {
			resetForm()
			successFn(submitResponse.question.answers)
		}
	}
	setSubmitting(false)
}
