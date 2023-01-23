import React from "react";
import Input from "../shared/Input.jsx";
import { useNavigate} from 'react-router-dom';
import { FaGlobeAfrica } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdLock } from "react-icons/md";
import { useState } from "react";
import { createroom as CreateROOM } from "../HTTPS/Https.js";

const Addroommodule = ({ setshowModule }) => {
  const [roomType, setroomType] = useState("open");
  const [topic, settopic] = useState("");
  const Navigat=useNavigate()

  const createRooms = async () => {
    try {
      if (!topic) return;
      const { data } = await CreateROOM({ topic, roomType });
       Navigat(`/room/${data.id}`)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modelMask">
      <div className="modelbody">
        <RiCloseCircleLine
          className="closebutton"
          onClick={() => setshowModule(false)}
        />
        <div className="modelhader">
          <h3 style={{"fontSize":"15px"}}>Enter Topic</h3>
          <Input
            value={topic}
            onChange={(e) => settopic(e.target.value)}
            inpsty="true"
            placeholder="Enter Topic"
          />
          <h2 style={{ margin: "15px 0px", fontWeight: "600", fontSize:'18px' }}>Room Types</h2>
          <div className="roomsTypes">
            <div
              onClick={() => setroomType("open")}
              className={`box ${roomType === "open" ? "active" : ""}`}
            >
              <FaGlobeAfrica className="boximg" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setroomType("social")}
              className={`box ${roomType === "social" ? "active" : ""}`}
            >
              <TiGroup className="boximg" />
              <span>Social</span>
            </div>{" "}
            <div
              onClick={() => setroomType("lock")}
              className={`box ${roomType === "lock" ? "active" : ""}`}
            >
              <MdLock className="boximg" />
              <span>Lock</span>
            </div>
          </div>
        </div>
        <div className="modelfooter">
          <h3 style={{ fontWeight: "bold" }}>start a room, open to everyone</h3>
          <button onClick={createRooms}>Let's Go</button>
        </div>
      </div>
    </div>
  );
};

export default Addroommodule;
