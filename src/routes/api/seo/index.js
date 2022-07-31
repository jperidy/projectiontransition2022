import Seo from '../../../database/models/seoModel';

export async function GET() {

    const seo = await Seo.findOne({ name: "seo" });
    if (!seo) {
        return {
            status: 404,
            body: { message: `seo not found`, value: {} }
        }
    }

    return { 
        status: 200,
        body: {message: 'get seo', value: seo}
    }
}

export async function POST({ request: req}) {
    const updatedSeo = await req.json();

    const storedSeo = await Seo.findOne({ name: "seo" });
    if (!storedSeo) {
        const seoCreated = await Seo.create({
            ...updatedSeo,
            name: 'seo'
        });
        if (!seoCreated) {
            return {
                status: 500,
                body: { message: `Error: seo not created`, value:[] }
            }
        }
        return {
            status: 200,
            body: { message: 'seoCreated', value: seoCreated}
        }
    }

    for (let key in updatedSeo) {
        storedSeo[key] = updatedSeo[key]
    }
    
    await storedSeo.save();
    return {
        status: 200,
        body: { message: 'seoUpdated', value: storedSeo }
    }
}