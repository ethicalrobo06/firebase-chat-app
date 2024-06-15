import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import { useState } from "react";
import "./detail.css";

const Detail = () => {
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
        useChatStore();
    const { currentUser } = useUserStore();
    const [showPhotos, setShowPhotos] = useState(false);

    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id);

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            });
            changeBlock();
        } catch (err) {
            console.log(err);
        }
    };

    const handleLogout = () => {
        auth.signOut();
        resetChat();
    };

    const togglePhotos = () => {
        setShowPhotos(!showPhotos);
    };

    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title" onClick={togglePhotos}>
                        <span>Shared photos</span>
                        <img src={showPhotos ? "./arrowUp.png" : "./arrowDown.png"} alt="" />
                    </div>
                    {showPhotos && (
                        <div className="photos">
                            <div className="photoItem">
                                <div className="photoDetail">
                                    <img
                                        src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                        alt=""
                                    />
                                    <span>photo_2024_2.png</span>
                                </div>
                                <img src="./download.png" alt="" className="icon" />
                            </div>
                            <div className="photoItem">
                                <div className="photoDetail">
                                    <img
                                        src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                        alt=""
                                    />
                                    <span>photo_2024_2.png</span>
                                </div>
                                <img src="./download.png" alt="" className="icon" />
                            </div>
                            <div className="photoItem">
                                <div className="photoDetail">
                                    <img
                                        src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                        alt=""
                                    />
                                    <span>photo_2024_2.png</span>
                                </div>
                                <img src="./download.png" alt="" className="icon" />
                            </div>
                            <div className="photoItem">
                                <div className="photoDetail">
                                    <img
                                        src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                        alt=""
                                    />
                                    <span>photo_2024_2.png</span>
                                </div>
                                <img src="./download.png" alt="" className="icon" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBlock}>
                    {isCurrentUserBlocked
                        ? "You are Blocked!"
                        : isReceiverBlocked
                            ? "User blocked"
                            : "Block User"}
                </button>
                <button className="logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Detail;
