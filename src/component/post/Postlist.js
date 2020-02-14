import React from "react";

function Postlist(props) {
  console.log(props);
  return (
    <ul>
      {props.posts.data.map(post => {
        return (
          <li key={post.id}>
            <h1>{post.titulo}</h1>
          </li>
        );
      })}
    </ul>
  );
}

export default Postlist;
