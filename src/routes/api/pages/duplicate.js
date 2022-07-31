import Page from '../../../database/models/pageModels';

export async function POST({request: req}) {

    const pageToDuplicate = (await req.json()).pageName;

    const content = await Page.findOne({ name: pageToDuplicate });

    if(!content) {
        return {
            status: 401,
            body: {message: "Not authorized : you can't duplicate non existing page", value:[]}
        }
    }

    const contentCreated = await Page.create({ 
        content: content.content,
        name: content.name + "_copy",
        display: false,
    });

    if (!contentCreated) {
        return {
            status: 500,
            body: { message: `Error: ${pageToDuplicate.name} not duplicated`, value:[] }
        }
    }

    return {
        status: 200,
        body: { message: 'contentDuplicated', value: contentCreated}
    }
}