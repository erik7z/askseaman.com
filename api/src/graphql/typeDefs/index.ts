import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { print } from 'graphql'

const loadedFiles = loadFilesSync(path.join(__dirname, './'), {
	extensions: ['gql'],
	ignoreIndex: true,
	recursive: true,
})

export const typeDefs = print(mergeTypeDefs(loadedFiles))
