import Image from 'next/image';
import Link from 'next/link';

function PostItem(props) {
  const { id, slug, title, image } = props;

  return (
    <>
      <Link href={`/${slug}`}>
        <a className="text-decoration-none">
          <Image
            width={600}
            height={350}
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
