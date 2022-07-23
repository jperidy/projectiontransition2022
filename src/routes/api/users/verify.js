export async function POST() {

    // if protect is pass then the token is valid
    return {
        status: 200,
        body: {message: 'token is valid'}
    }    
};