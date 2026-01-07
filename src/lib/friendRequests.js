import axios from "axios";

export const sendFriendRequest = async (senderEmail, receiverEmail) => {
    try {
        const { data } = await axios.post("/api/friends", { senderEmail, receiverEmail });
        return data.message;
    } catch (err) {
        throw new Error(err.response?.data?.message || err.message);
    }
};

export const acceptFriendRequest = async (userEmail, friendEmail) => {
    try {
        const { data } = await axios.put("/api/friends", { userEmail, friendEmail });
        return data.message;
    } catch (err) {
        throw new Error(err.response?.data?.message || err.message);
    }
};
