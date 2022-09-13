import Image from 'next/image';
import Link from 'next/link';
import MetaHead from '@/components/shared/meta-head';
import { getPostBySlug, getAllPost } from '@/config/data';

function Post(props) {
  const { post, allPost } = props;

  return (
    <>
      <MetaHead
        title={post.title}
        description={post.description}
        canonical={post.id}
      />
      <div className="row my-3">
        <div className="col-12 col-md-8 mb-3">
          <div className="card">
            <div className="card-body">
              <Image
                width={600}
                height={350}
                src={`/assets/img/${post.image}`}
                alt={post.title}
                className="rounded"
              />
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
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
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const postData = getPostBySlug(params.post_slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  const allPost = getAllPost(1, 5);

  return {
    props: { post: postData, allPost: allPost },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Post;
