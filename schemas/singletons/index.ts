
interface SingletonType {
	title:  string;
	schemaType: string;
}


export const singletonTypes: SingletonType[] = [
	{
		schemaType: "seoSettings",
		title: "SEO"
	},
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