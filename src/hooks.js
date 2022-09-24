import connectDB from './database/db';
import { verifyAuthentication } from './services/api/authentication';
import config from './config.json';
import Log from './database/models/logModel';

const admins = [
    { methods: ['POST'], uri: /^\/api\/seo$/ },
    { methods: ['POST'], uri: /^\/api\/users\/verify$/ },
    { methods: ['POST'], uri: /^\/api\/pages$/ },
    { methods: ['PUT', 'DELETE'], uri: /^\/api\/pages\/[a-zA-Z-_]*$/},
    { methods: ['POST'], uri: /^\/api\/pages\/duplicate$/ },
    { methods: ['PUT'], uri: /^\/api\/fonts$/ },
    { methods: ['DELETE'], uri: /^\/api\/fonts\/[a-zA-Z-_]*$/ },
    { methods: ['PUT'], uri: /^\/api\/footers$/ },
    { methods: ['POST'], uri: /^\/api\/navs$/ },
    { methods: ['POST'], uri: /^\/api\/upload-files$/ },
    { methods: ['POST'], uri: /^\/api\/users$/ },
    { methods: ['POST'], uri: /^\/api\/users\/verify$/ },
];

const authentication = async (event) => {
    const matchUri = admins.find((admin) => admin.uri.test(event.url.pathname));
    if (
        matchUri
        && matchUri.methods.includes(event.request.method)
    ) {
        return verifyAuthentication(event.request);
    }
    return true;
}

const registerLogs = async (event) => {
    if (!event.url.pathname.match(/\/api\//i)) {
        await Log.create({
            type: 'page',
            target: event.url.pathname
        })
    }
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    if (!(config.SVELTE_ENV === 'production')) {
        console.log('DEBUG:', event.request.method, event.url.href);
    }
    try {
        await connectDB();
        await registerLogs(event)
        const isAuhtenticated = await authentication(event);
        if (!isAuhtenticated) {
            return new Response('Token not valid');
        }
        return resolve(event);
    } catch (error) {
        console.log("Error in hooks", error);
        return new Response('Error', error);
    }
}