import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { print } from 'graphql'
import { getRanksEnumDefs } from '../../data/ranks'

const loadedFiles = loadFilesSync(path.join(__dirname, './'), {
	extensions: ['gql'],
	ignoreIndex: true,
	recursive: true,
})

const loadedTypeDefs = print(mergeTypeDefs(loadedFiles))

export const typeDefs = print(
	mergeTypeDefs([loadedTypeDefs, getRanksEnumDefs()])
)
