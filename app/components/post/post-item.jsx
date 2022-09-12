import Link from 'next/link';

function PostItem(props) {
  const { id, title, image } = props;

  return (
    <>
      <Link href={`/${id}`}>
        <a className="text-decoration-none">
          <img
            src={`/assets/img/${image}`}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title text-dark">{title}</h5>
          </div>
        </a>
      </Link>
    </>
  );
}

export default PostItem;