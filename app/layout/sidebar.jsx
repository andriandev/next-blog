import Link from 'next/link';

function Sidebar(props) {
  const { allPost } = props;

  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5>Recent Post</h5>
          <ol className="list-group list-group-numbered">
            {allPost.map((post) => (
              <Link href={`/${post.slug}`} key={post.id}>
                <a className="text-decoration-none">
                  <li className="text-primary"># {post.title}</li>
                </a>
              </Link>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
