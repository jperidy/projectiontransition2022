import mongoose from 'mongoose';

const logSchema = mongoose.Schema({
    type: {type: String, required: true},
    target: {type: String, required: true},
}, {timestamps: true} );

const Log = mongoose.model('Log', logSchema);

export default Log;