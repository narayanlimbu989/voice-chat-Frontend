import React from "react";
import { BsFillChatFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const nav = useNavigate();
  return (
    <div onClick={() => nav(`/room/${room.id}`)} className="roomlist_card">
      <h3 className="roomTopic">{room.topic}</h3>
      <div
        className={`speaker ${
          room.speakers.length === 1 ? "singlespeaker" : ""
        }`}
      >
        <div className="left">
          {room.speakers.map((speaker) => (
            <img key={speaker.id} src={speaker.avatar} alt="avatar" />
          ))}
        </div>
        <div className="right">
          {room.speakers.map((speaker) => (
            <div key={speaker.id} className="namewraper">
              <span>{speaker.name}</span>
              <BsFillChatFill />
            </div>
          ))}
        </div>
      </div>
      <div className="peoplecount">
        <span>{room.totalpeople}</span>
        <FaUserCheck style={{ color: "#23d223" }} />
      </div>
    </div>
  );
};

export default RoomCard;
