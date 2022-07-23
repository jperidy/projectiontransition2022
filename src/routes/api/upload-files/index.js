import path from 'path';
import { appendFileSync, unlinkSync } from 'node:fs';

export async function POST({ url, request: req }) {

    try {
        const fileName = url.searchParams.get('fileName');
        const __dir = path.resolve();
    
        const storage = `${__dir}/static_server/public/uploads/${fileName}`;
    
        const stream = req.body.getReader();
    
        const { value: chunk } = await stream.read();
        if (chunk) {
            appendFileSync(storage, chunk);
        }
    
        return {
            body: {
                success: true,
                storage,
            },
        }
    } catch (error) {
        console.log(error);
        return {
            body: error.message
        }
    }
}

export async function DELETE({ url }) {
    try {
        const name = url.searchParams.get('url');
        const directory = path.resolve() + '/static_server/public';

        unlinkSync(directory + name);

        return {
            status: 200,
            body: { message: 'File deleted', value: directory + name }
        }
    } catch (error) {

        return {
            status: 200,
            body: {message: `Error deleting file or no file to delete: ${url.searchParams.get('url')}`}
        }    
    }
}