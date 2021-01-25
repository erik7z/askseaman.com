declare module 'graphql-auth-directives' {
	export function IsAuthenticatedDirective(args?: any): any
	export function HasRoleDirective(args?: any): any

	export default function (args?: any): any
}
