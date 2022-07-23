import Nav from '../../../database/models/navModels';

export async function GET() {
    const navBar = await Nav.findOne({ name: 'nav' });
    if (!navBar) {
        return {
            status: 404,
            body: { message: `NavBar not found`, value: {} }
        }
    }
    return {
        status: 200,
        body: { message: 'get navbar', value: navBar }
    }
}

export async function POST({ request: req }) {
    const updatedNavBar = await req.json();

    const navBar = await Nav.findOne({ name: 'nav' });
    if (!navBar) {
        const navBarCreated = await Nav.create(updatedNavBar);
        return {
            status: 200,
            body: { message: 'navBarCreated', value: navBarCreated }
        }
    }

    for (let key in updatedNavBar) {
        navBar[key] = updatedNavBar[key]
    }

    const navBarUpdated = await navBar.save();
    return {
        status: 200,
        body: { message: 'navBarUpdated', value: navBarUpdated }
    }
}