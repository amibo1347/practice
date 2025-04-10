import React from "react";
import Room from "./Room";
import imageRoomicon from "../assets/room_icon_A.png";
import imageRoomicon1 from "../assets/room_icon_B.png";
import imageRoomicon2 from "../assets/room_icon_C.png";
import imageRoomicon3 from "../assets/room_icon_D.png";
import imageRoomicon4 from "../assets/room_icon_E.png";

import img1 from "../assets/user_icon.png"


const styles ={
container : {
    display: "flex", // 플렉스 컨테이너 설정
    flexDirection: "row", // 가로 방향으로 정렬
    padding: 20,
  },
};
function RoomList(props){
    return(
        <div style={styles.container}>
            <Room image={imageRoomicon} name="[1F] Cube A" comment="사용가능"/>
            <Room image={imageRoomicon1} name="[1F] Cube B" comment="사용가능"/>
            <Room image={imageRoomicon2} name="[1F] Cube C" comment="사용가능"/>
            <Room image={imageRoomicon3} name="[1F] Cube D" comment="사용가능"/>
            <Room image={imageRoomicon4} name="[1F] Cube E" comment="사용가능"/>
        </div>
    )
}
export default RoomList;