function formatToRowBasedJson(data: ReadonlyBuildingSetting[]) {
    const baseHeaderRow = ['type', 'level']
    const test = this.generateHeaderRow(baseHeaderRow, data, 'paramName')
    return null
}
function generateHeaderRow(
    baseRow: string[],
    data: any[],
    property: string,
) {
    return baseRow.concat(
        data.reduce((acc, item) => {
            const value = item[property]
            if (acc.indexOf(value) === -1) return [...acc, value]
            return acc
        }, []),
    )
}

function generateRow(data, property) {
    const cellDataProperty = 'value'
    return data.reduce((acc, item) => {
        const mappedProperty = item[property]
        if (acc.indexOf(mappedProperty) === -1) {
            const cellData = item[cellDataProperty]
            return [...acc, mappedProperty, cellData]
        }
        return acc
    }, [])
}