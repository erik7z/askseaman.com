import React, { useState } from 'react'
import ReactTags, { Tag as ITag } from 'react-tag-autocomplete'

const defaultTags: ITag[] = []

export const TagsAutoSuggest = ({
	name,
	setFieldValue,
	suggestions,
}: {
	name: string
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean | undefined
	) => void
	suggestions: ITag[]
}) => {
	const [tags, setTags] = useState<ITag[]>(defaultTags)

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
			// ref={tagsInput}
			tags={tags}
			suggestions={suggestions}
			onDelete={onDelete}
			onAddition={onAddition}
			delimiters={['Enter', 'Tab']}
		/>
	)
}
