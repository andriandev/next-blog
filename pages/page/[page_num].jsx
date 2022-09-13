import MetaHead from '@/components/shared/meta-head';
import PostList from '@/components/post/post-list';
import Pagination from '@/components/shared/pagination';
import { getAllPost, getPageCount } from '@/config/data';

function HomePageNum(props) {
  const { post, pageCount, page } = props;

  return (
    <>
      <MetaHead
        title={`Next Blog${' | Page ' + page}`}
        description="Next blog layout"
        index="noindex"
      />
      <PostList allPost={post} />
      <Pagination pageCount={pageCount} page={page} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const page = params.page_num;
  const post = getAllPost(page);

  if (post.length === 0) {
    return {
      notFound: true,
    };
  }

  const pageCount = getPageCount();

  return {
    props: { post: post, pageCount: pageCount, page: page },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default HomePageNum;
