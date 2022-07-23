import Font from '../../../database/models/fontModel';

export async function DELETE({ params }) {
    const id = params.id;

    const font = await Font.deleteOne({ _id: id });

    return {
        status: 200,
        body: { message: 'font deleted', value: font }
    }
}