import React, { useState, useRef } from 'react'
import ReactTags, { Tag as ITag } from 'react-tag-autocomplete'

const defaultSuggestions: ITag[] = [
	{ id: 3, name: 'Bananas' },
	{ id: 4, name: 'Mangos' },
	{ id: 5, name: 'Lemons' },
	{ id: 6, name: 'Apricots' },
	{ id: 7, name: 'Cucumber' },
	{ id: 7, name: 'Ravioli' },
]

const defaultTags: ITag[] = []

export const TagsAutoSuggest = ({
	name,
	setFieldValue,
}: {
	name: string
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean | undefined
	) => void
}) => {
	const tagsInput = useRef(null)
	const [tags, setTags] = useState<ITag[]>(defaultTags)

	const [suggestions] = useState(defaultSuggestions)

	const onDelete = (i: number) => {
		const tagsD = tags.slice(0)

		tagsD.splice(i, 1)
		setTags(tagsD)
	}

	const onAddition = (tag: ITag) => {
		const tagsA = [].concat(tags as never[], [tag] as never[])
		setTags(tagsA)

		setFieldValue(
			name,
			tagsA
				.map((tag: ITag) => tag.name)
				.join(',')
				.toLocaleLowerCase()
		)
	}

	return (
		<ReactTags
			ref={tagsInput}
			tags={tags}
			suggestions={suggestions}
			onDelete={onDelete}
			onAddition={onAddition}
			delimiters={['Enter', 'Tab']}
		/>
	)
}

// import React from 'react'
// import Autosuggest from 'react-autosuggest'

// function states() {
// 	return [
// 		{ abbr: 'AL', name: 'Alabama' },
// 		{ abbr: 'AK', name: 'Alaska' },
// 		{ abbr: 'AZ', name: 'Arizona' },
// 		{ abbr: 'AR', name: 'Arkansas' },
// 		{ abbr: 'CA', name: 'California' },
// 		{ abbr: 'CO', name: 'Colorado' },
// 		{ abbr: 'CT', name: 'Connecticut' },
// 		{ abbr: 'DE', name: 'Delaware' },
// 		{ abbr: 'FL', name: 'Florida' },
// 		{ abbr: 'GA', name: 'Georgia' },
// 		{ abbr: 'HI', name: 'Hawaii' },
// 		{ abbr: 'ID', name: 'Idaho' },
// 		{ abbr: 'IL', name: 'Illinois' },
// 		{ abbr: 'IN', name: 'Indiana' },
// 		{ abbr: 'IA', name: 'Iowa' },
// 		{ abbr: 'KS', name: 'Kansas' },
// 		{ abbr: 'KY', name: 'Kentucky' },
// 		{ abbr: 'LA', name: 'Louisiana' },
// 		{ abbr: 'ME', name: 'Maine' },
// 		{ abbr: 'MD', name: 'Maryland' },
// 		{ abbr: 'MA', name: 'Massachusetts' },
// 		{ abbr: 'MI', name: 'Michigan' },
// 		{ abbr: 'MN', name: 'Minnesota' },
// 		{ abbr: 'MS', name: 'Mississippi' },
// 		{ abbr: 'MO', name: 'Missouri' },
// 		{ abbr: 'MT', name: 'Montana' },
// 		{ abbr: 'NE', name: 'Nebraska' },
// 		{ abbr: 'NV', name: 'Nevada' },
// 		{ abbr: 'NH', name: 'New Hampshire' },
// 		{ abbr: 'NJ', name: 'New Jersey' },
// 		{ abbr: 'NM', name: 'New Mexico' },
// 		{ abbr: 'NY', name: 'New York' },
// 		{ abbr: 'NC', name: 'North Carolina' },
// 		{ abbr: 'ND', name: 'North Dakota' },
// 		{ abbr: 'OH', name: 'Ohio' },
// 		{ abbr: 'OK', name: 'Oklahoma' },
// 		{ abbr: 'OR', name: 'Oregon' },
// 		{ abbr: 'PA', name: 'Pennsylvania' },
// 		{ abbr: 'RI', name: 'Rhode Island' },
// 		{ abbr: 'SC', name: 'South Carolina' },
// 		{ abbr: 'SD', name: 'South Dakota' },
// 		{ abbr: 'TN', name: 'Tennessee' },
// 		{ abbr: 'TX', name: 'Texas' },
// 		{ abbr: 'UT', name: 'Utah' },
// 		{ abbr: 'VT', name: 'Vermont' },
// 		{ abbr: 'VA', name: 'Virginia' },
// 		{ abbr: 'WA', name: 'Washington' },
// 		{ abbr: 'WV', name: 'West Virginia' },
// 		{ abbr: 'WI', name: 'Wisconsin' },
// 		{ abbr: 'WY', name: 'Wyoming' },
// 	]
// }

// export const TagsAutoSuggest = ({ ...props }) => {
// 	// const handleOnChange = (
// 	// 	e: React.FormEvent<HTMLInputElement>,
// 	// 	{ method }: { method: string }
// 	// ) => {
// 	// 	if (method === 'enter') {
// 	// 		e.preventDefault()
// 	// 	} else {
// 	// 		props.onChange(e)
// 	// 	}
// 	// }

// 	const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
// 	const inputLength = inputValue.length

// 	let suggestions = states().filter((state) => {
// 		return state.name.toLowerCase().slice(0, inputLength) === inputValue
// 	})

// 	return (
// 		<Autosuggest
// 			ref={props.ref}
// 			suggestions={suggestions}
// 			// shouldRenderSuggestions={(value) => value && value.trim().length > 0}
// 			getSuggestionValue={(suggestion) => suggestion.name}
// 			renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
// 			// inputProps={{ ...props, onChange: handleOnChange }}
// 			inputProps={{ ...props, onChange: props.onChange, value: props.value }}
// 			onSuggestionSelected={(e, { suggestion }) => {
// 				props.addTag(suggestion.name)
// 			}}
// 			onSuggestionsClearRequested={() => {}}
// 			onSuggestionsFetchRequested={() => {}}
// 		/>
// 	)
// }
