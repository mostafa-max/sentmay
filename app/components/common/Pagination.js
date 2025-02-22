export default function Pagination({ currentPage, totalPages, onPrevious, onNext, loading }) {
    return (
      <div className="relative join flex justify-center my-8 z-50">
        <button
          onClick={onPrevious}
          disabled={currentPage === 0 || loading}
          className="join-item btn btn-primary"
        >
          الصفحة السابقة
        </button>
        <button className="join-item btn btn-primary no-animation">
          صفحة رقم {currentPage + 1} من {totalPages}
        </button>
        <button
          onClick={onNext}
          disabled={loading || currentPage>= totalPages-1}
          className="join-item btn btn-primary"
        >
          الصفحة التالية
        </button>
      </div>
    );
  }