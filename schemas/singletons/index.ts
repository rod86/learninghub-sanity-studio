
interface SingletonType {
	title:  string;
	schemaType: string;
}


export const singletonTypes: SingletonType[] = [
	{
		schemaType: "siteSettings",
		title: "Site"
	},
];

export const singletonActions = new Set([
	"publish",
	"discardChanges",
	"restore",
]);