import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../css/style.css';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/headless-wordpress/server/wp-json/wp/v2/posts?_embed")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      {posts &&
        posts.map((post) => (
          
          <div className="card" key={post.id}>
            <div className="card-banner">
              <p className="category-tag popular">Category</p>
              <img
                className="banner-img"
                src={
                  post.feature_image
                    ? post.feature_image
                    : 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lr627qqql65d9hvr5nsq.jpg'
                }
                alt={post.title.rendered}
              />
            </div>
            <div className="card-body">
              <p className="blog-hashtag">#Tags</p>
              <h2 className="blog-title">{post.title.rendered}</h2>
              <p className="blog-description" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <div className="card-profile">
                <img
                  className="profile-img"
                  src='https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg'
                  alt='Author'
                />
                <div className="card-profile-info">
                  <h3 className="profile-name">Author Name</h3>
                  <p className="profile-followers">5.2k followers</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
