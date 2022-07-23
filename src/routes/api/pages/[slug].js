import Page from '../../../database/models/pageModels';

export async function GET({params}) {

    const content = await Page.findOne({ name: '/pages/' + params.slug });
    
    if (!content) {
        return {
            status: 404,
            body: {
                message: `Page content not found. Page name requested: ${params.slug}`,
                value: {name: params.slug, content:[]}
            }
        }
    }

    return {
        status: 200,
        body: {message: 'get content', value: content}
    }
}

export async function DELETE({params}) {

    const content = await Page.findOne({ _id: params.slug });

    if (!content) {
        return {
            status: 404,
            body: {
                message: `Page content not found. Page name requested: ${params.slug}`,
                value: { name: content.name, content:[] }
            }
        }
    }

    await Page.deleteOne({ _id: params.slug });

    return {
        status: 200,
        body: {message: 'page removed', value: content}
    }
}


export async function PUT({ params, request: req }) {

    const updateData = await req.json();
    const result = await Page.findOneAndUpdate({ _id: params.slug }, updateData);

    if (!result) {
        return {
            status: 500,
            body: { message: `Error: ${params.slug} not updated` }
        }
    }

    return {
        status: 200,
        body: { message: 'pageUpdated', value: ''}
    }
}