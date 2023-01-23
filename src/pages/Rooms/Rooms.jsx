import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RiUserVoiceFill } from "react-icons/ri";
import Addroommodule from "../../components/AddroomModule/Addroommodule";
import { getallRooms } from "../../components/HTTPS/Https";
import RoomCard from "../../components/shared/RoomCard";

const Rooms = () => {
  const [showModule, setshowModule] = useState(false);
  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    const fatchRoom = async () => {
      const { data } = await getallRooms();
      setrooms(data);
    };
    fatchRoom();
  }, []);
  return (
    <>
      <div className="container">
        <div className="roomsheader">
          <div className="left">
            <span className="H1">All Voice Room</span>
            <div className="searcharea">
              <BiSearch style={{ cursor: "pointer" }} />
              <input type="text" />
            </div>
          </div>
          <div onClick={() => setshowModule(true)} className="right">
            <RiUserVoiceFill />
            <span>start a room</span>
          </div>
        </div>
        <div className="roomlist">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModule && <Addroommodule setshowModule={setshowModule} />}
    </>
  );
};

export default Rooms;
