import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/style.css";

// Utility function to truncate the title
const truncateTitle = (title, wordLimit) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};

const Posts = ({ setLoading, apiRequestCompleted }) => {
  // Pass setLoading from parent component
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true); // New loading state for posts

  useEffect(() => {
    axios
      .get(
        "http://localhost/headless-wordpress/server/wp-json/wp/v2/posts?_embed"
      )
      .then((res) => {
        setPosts(res.data);
        apiRequestCompleted()
      })
      .finally(() => {
        setLoadingPosts(false); // Set loading to false after fetching
        setLoading(false); // Notify parent component that this component has completed loading
        apiRequestCompleted();
      });
  }, [setLoading]);

  return (
    <>
      {/* Use the Menu component correctly */}
      <div className="wrapper">
        <section className="news" id="news">
          <div className="titletext">
            <h1>
              React <span>Blogs</span>
            </h1>
          </div>
          <div className="container">
            {posts.map((post) => {
              const author = post._embedded?.author?.[0];
              const authorName = author ? author.name : "Unknown Author";
              const authorAvatar = author
                ? author.avatar_urls?.[48]
                : "https://i.pravatar.cc/40";
              const postDate = new Date(post.date).toLocaleDateString();
              const modifiedDate = new Date(post.modified).toLocaleDateString();
              const categories = post._embedded?.["wp:term"]?.[0] || [];

              return (
                <div className="card" key={post.id}>
                  <div className="card__header">
                    <img
                      src={
                        post.feature_image
                          ? post.feature_image
                          : "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lr627qqql65d9hvr5nsq.jpg"
                      }
                      alt="card__image"
                      className="card__image"
                      width="600"
                    />
                  </div>
                  <div className="card__body">
                    <div className="d-flex text-center">
                      {categories.map((category) => (
                        <span key={category.id} className="tag">
                          {category.name}
                        </span>
                      ))}
                    </div>
                    <h4>{truncateTitle(post.title.rendered, 5)}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                  </div>
                  <div className="card__footer">
                    <div className="user">
                      <img
                        src={authorAvatar}
                        alt={authorName}
                        className="user__image"
                      />
                      <div className="user__info">
                        <h5>{authorName}</h5>
                        <small>
                          {postDate === modifiedDate
                            ? `Published on ${postDate}`
                            : `Last updated on ${modifiedDate}`}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Posts;
