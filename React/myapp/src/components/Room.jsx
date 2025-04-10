import React from "react";
import img1 from "../assets/user_icon.png"

const styles = {
    wrapper: {
        margin: 6,
        padding: 16,
        display: "flex",
        flexDirection: "column", // 세로 방향으로 정렬
        alignItems: "center", // 가운데 정렬
        border: "1px solid grey",
        borderRadius: 16,
        width: 200, // 컨테이너 너비
    },
    imageContainer: {
        marginBottom: 16, // 이미지와 제목 사이 여백
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8, // 모서리를 둥글게
    },
    nameText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold", // 굵은 글씨체
        marginBottom: 12, // 제목과 텍스트 사이 여백
    },
    commentText: {
        color: "black",
        fontSize: 14,
        textAlign: "center", // 텍스트 가운데 정렬
    },
};
function Room(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={props.image} style={styles.image}/>
            </div>
            <span style={styles.nameText}>{props.name}</span>
            <p style={styles.commentText}>{props.comment}</p>
        </div>
    );
}
export default Room;