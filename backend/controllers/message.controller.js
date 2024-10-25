import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js"; // Ensure this import is correct

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.userId;
        const receiverId = req.params.userId;
        const { message } = req.body;

        // Check for the existence of a conversation
        let gotConversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // If no conversation exists, create one
        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        };

        // Create a new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        // Add the new message to the conversation
        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        };

        // Save the updated conversation 
        await gotConversation.save();

        // Send a successful response
        return res.status(201).json({
            success: true,
            message: "Message sent successfully",
            conversationId: gotConversation._id, // Optional: include the conversation ID
            messageId: newMessage._id // Optional: include the new message ID
        });

    } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).json({ success: false, message: "An error occurred" });
    }
}

export const getMessage = async(req, res)=>{

    try{

        const receiverId = req.params.userId;
        const senderId = req.userId;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages")

        return res.status(200).json(conversation?.messages);

    }catch(error){
        console.error("Error getting message:", error);
        return res.status(500).json({ success: false, message: "An error occurred" });
    }

}
