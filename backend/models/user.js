const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    login: String,
    name: String,
    password: String,
    role: {
        type: String,
        enum: ['developer', 'manager']
    },
    avaColors: {
        top: String,
        bottom: String
    },
    tasks: {
        type: [
            {
                type: ObjectId,
                ref: 'Task'
            }
        ],
        default: []
    },
    spec: {
        type: String,
        enum: ['js', 'python', 'html']
    }
});


function formatPublic() {
    return {
        id: this._id,
        role: this.role,
        name: this.name,
        avaColors: this.avaColors
    }
}

userSchema.method('formatPublic', formatPublic);


mongoose.model('User', userSchema);
