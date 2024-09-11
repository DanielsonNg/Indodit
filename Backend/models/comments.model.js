const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.ObjectId

const CommentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "Content is required"]
        },
        comment_id: {
            type: ObjectId,
        },
        post_id: {
            type: ObjectId,
        }
    },
    { timestamps: true}
)

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment