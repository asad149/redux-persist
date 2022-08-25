import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import AddPost from "./AddPost";

const Home = () => {
  const [post, setPost] = useState([]);
  const [isAddPost, setIsAddPost] = useState(true);

  const btnName =isAddPost? "Add Post" : "Back";

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPost(res?.data));
  }, []);

  console.log("posts",post)

  return (
    <div className="mt-3">
      <div>
        <button
          className="btn btn-warning mb-2"
          onClick={() => setIsAddPost(!isAddPost)}
        >
           {btnName}
        </button>
      </div>
      {isAddPost ? (
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email </th>
              <th>Address</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {post.map((p, ind) => (
              <tr>
                <th scope="row">{ind + 1}</th>
                <td>{p?.name}</td>
                <td>{p?.email}</td>
                <td>{p?.address?.street}</td>
                <td>{p?.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <AddPost setPost={setPost} setIsAddPost={setIsAddPost} />
      )}
    </div>
  );
};

export default Home;
