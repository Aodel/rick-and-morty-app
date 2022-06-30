import React from 'react'


export const Pagination = (prev, next, onPrevious, onNext) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

  return (
    <div className="flex justify-center mb-2 px-3">
      <nav
        className=" relative z-0 inline-flex rounded-md shadow-sm -space-x-px my-6 mx-3 "
        aria-label="Pagination"
      >
        {prev ? (
          <div className="pagesPrev">
            <button
                onClick={handlePrevious}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-zinc-600 bg-zinc-900 text-sm font-medium text-gray-100 hover:bg-lime-400 active:bg-red-400 focus:outline-none focus:ring focus:ring-zinc-700"
            >
                <span className="sr-only">Previous</span>
                <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
                </svg>
                Previous
            </button>
          </div>
        ) : null}
        {next ? (
          <div className='pagesNext'>
            <button
            onClick={handleNext}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-zinc-600 bg-zinc-900 text-sm font-medium text-gray-100 hover:bg-lime-400 active:bg-red-400 focus:outline-none focus:ring focus:ring-zinc-700"
          >
                <span className="sr-only">Next</span>
                Next
                <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                />
                </svg>
            </button>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
