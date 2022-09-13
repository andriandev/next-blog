import Link from 'next/link';

function Pagination(props) {
  const { page, pageCount } = props;

  return (
    <nav className="mt-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item${page <= 1 || !page ? ' disabled' : ''}`}>
          <Link href={page <= 1 ? '/' : `/page/${page - 1}`}>
            <a className="page-link">&laquo; Prev</a>
          </Link>
        </li>
        <li className="page-item">
          <Link href="/">
            <a className="page-link">Home</a>
          </Link>
        </li>
        <li className={`page-item${page >= pageCount ? ' disabled' : ''}`}>
          <Link href={page < pageCount ? `/page/${+page + 1}` : '/'}>
            <a className="page-link">Next &raquo;</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
