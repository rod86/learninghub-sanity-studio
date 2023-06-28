import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {DesktopIcon, RocketIcon} from '@sanity/icons';
import {schemaTypes} from './schemas';
import {deskStructure, templates, document} from './desk/deskStructure';

export default defineConfig([
    {
        projectId: '99vr9lor',
        dataset: 'development',
        name: 'development',
        basePath: '/dev',
        title: 'Development',
        icon: DesktopIcon,
        plugins: [
		  	deskTool({
                structure: deskStructure
            }),
            visionTool()
        ],
        schema: {
            types: schemaTypes,
            templates
        },
        document
    },
    {
        projectId: '99vr9lor',
        dataset: 'production',
        name: 'production',
        basePath: '/prod',
        title: 'Production',
        icon: RocketIcon,
        plugins: [
            deskTool({
                structure: deskStructure
            }),
        ],
        schema: {
            types: schemaTypes,
            templates
        },
        document
    }
]);
