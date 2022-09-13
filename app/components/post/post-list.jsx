import PostItem from '@/components/post/post-item';

function PostList(props) {
  const { allPost } = props;

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center my-3">
        {allPost.map((post) => (
          <div className="col mb-2" key={post.id}>
            <div className="card h-100 shadow">
              <PostItem
                id={post.id}
                slug={post.slug}
                title={post.title}
                image={post.image}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
