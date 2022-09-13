import Link from 'next/link';
import MetaHead from '@/components/shared/meta-head';

function NotFound() {
  return (
    <>
      <MetaHead
        title="404 Page Not Found"
        description="404 Page Not Found"
        index="noindex"
      />
      <div className="card shadow-sm">
        <div className="card-body">
          <h1>404 Page Not Found</h1>
          <Link href="/">
            <button type="button" className="btn btn-primary btn-sm">
              Back Home &raquo;
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
