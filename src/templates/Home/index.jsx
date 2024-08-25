import { useCallback, useEffect, useState } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [serachValeu, setSerachValeu] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = serachValeu
    ? allPosts.filter((post) => post.title.toLowerCase().includes(serachValeu.toLowerCase()))
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMoreposts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = async (e) => {
    const { value } = e.target;
    setSerachValeu(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!serachValeu && <h1>Serach value: {serachValeu}</h1>}

        <TextInput handleChange={handleChange} serachValeu={serachValeu} />
      </div>
      {filteredPosts.length <= 0 && <p>Não existem posts :/</p>}

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      <div className="button-container">
        {!serachValeu && <Button disabled={noMorePosts} actionFn={loadMoreposts} text="Load More Posts" />}
      </div>
    </section>
  );
};
