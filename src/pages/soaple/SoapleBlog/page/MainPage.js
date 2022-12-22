import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../data.json";

// const Wrapper = () => {
//     return(
//       <div className="mainPage"></div>
//     );
// };

// const Container = () => {
//     return(
//       <div className="container"></div>
//     );
// };

const MainPage = (props) => {
    // const {} = props;
    const navigate = useNavigate();
    return(
        <div className="mainPage">
            <div className="container">
                <Button
                    title='write'
                    onClick={() => {
                        navigate('/post-write');
                    }}
                ></Button>
                <PostList
                    posts={data}
                    onClickItem = {(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                ></PostList>
            </div>
        </div>
    );

};

export default MainPage;