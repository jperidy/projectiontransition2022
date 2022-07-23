import Footer from '../../../database/models/footerModel';

export async function GET() {
    const footer = await Footer.findOne({ name: "footer" });
    if (!footer) {
        return {
            status: 404,
            body: { message: `footer not found`, value: {} }
        }
    }
    return {
        status: 200,
        body: { message: 'get footer', value: footer }
    }
}

export async function PUT({ request: req }) {
    const updatedFooter = await req.json();

    const footer = await Footer.findOne({ name: 'footer' });

    if (!footer) {
        const footerCreated = await Footer.create(updatedFooter);
        return {
            status: 200,
            body: { message: 'footerCreated', value: footerCreated }
        }
    }

    for (let key in updatedFooter) {
        footer[key] = updatedFooter[key]
    }
    
    const footerUpdated = await footer.save();
    return {
        status: 200,
        body: { message: 'footerUpdated', value: footerUpdated }
    }
}