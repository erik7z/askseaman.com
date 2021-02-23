import React, { ComponentProps, FC } from 'react'

import {
	SideAdvertBox,
	SideNewsBox,
	SideAskBox,
	SideTagCloudBox,
	SideTopUsersBox,
} from '../../../components'

import Section from '../../../components/Layout/Section'
import SideBar from '../../../components/Layout/SideBar'

import { AskQuestionContent } from './AskQuestionContent'

export const AskQuestion: FC<ComponentProps<any>> = ({ props }) => {
	return (
		<>
			<Section
				sectionName='Question'
				sectionTitle='Ask Question'
				sectionClass='section-ask-question'
			>
				<AskQuestionContent {...props} />
			</Section>
			<SideBar>
				<SideAskBox />
				<SideAdvertBox />
				<SideTagCloudBox />
				<SideTopUsersBox />
				<SideNewsBox />
			</SideBar>
		</>
	)
}
