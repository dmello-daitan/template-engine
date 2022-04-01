import { foundPair, replaceAll } from './util';

export const Template = (data: Record<string, string | number>, template: string): string => {
    for (const key in data) {
        if (template.includes('${' + key + '}')) {
            template = replaceAll(template, key, data[key]);
            delete data[key];
        }
    }

    if (Object.keys(data).length > 0) {
        if (foundPair(data, template)) {
            return Template(data, template);
        } else {
            throw `The list of variables (${Object.keys(data).join(', ')}) doesn't match with the template!`;
        }
    }

    return template;
}

export default Template;