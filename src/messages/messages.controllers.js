const Messages = require('../models/messages.models')
const uuid = require('uuid')

const createMessage = async (obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId: obj.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
}

const findAllMessages = async () => {
    const data = await Messages.findAll({
        where:{
            id: id
        }
    })
    return data
}

const findMessageById = async (id) => {
    const data = await Messages.findOne({
        where: {
            id: id
        }
    })
    return data
}

const removeMessageById = async (id) => {
    const data = await Messages.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    createMessage,
    findAllMessages,
    findMessageById,
    removeMessageById
}
