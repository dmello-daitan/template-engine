export const foundPair = (data: Record<string, string | number>, template: string): boolean => {
    for (const key in data) {
        if (template.includes('${' + key + '}')) {
            return true;
        }
    }
    return false;
}

export const replaceAll = (text: string, string: string | RegExp, newSubstr: any ): string => {
    return text.replace(new RegExp('\\$\\{'+string+'\\}', 'g'), newSubstr)
}
