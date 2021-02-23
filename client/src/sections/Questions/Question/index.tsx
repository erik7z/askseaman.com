import React, { useState } from 'react'

import { SideQuestInstrBox } from '../../../components'

import Section from '../../../components/Layout/Section'
import SideBar from '../../../components/Layout/SideBar'

import { QuestionPage } from './QuestionPage'

export const Question = () => {
	const [sectionTitle, setSectionTitle] = useState('')

	return (
		<>
			<Section
				sectionName='Question'
				sectionTitle={sectionTitle}
				sectionClass='section-question-page'
			>
				<QuestionPage setSectionTitle={setSectionTitle} />
			</Section>
			<SideBar>
				<SideQuestInstrBox />
			</SideBar>
		</>
	)
}
