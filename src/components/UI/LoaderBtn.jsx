import React from 'react'

const LoaderBtn = ({loading,text,loaderText,className}) => {
  return (
    <button
              type="submit"
              disabled={loading}
              className={`w-full h-12 text-accent-foreground font-semibold rounded-lg transition-all duration-300 
            ${loading ? "bg-accent/50 cursor-not-allowed" : "bg-accent hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"} ${className}`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  {loaderText}
                </div>
              ) : (
                text
              )}
            </button>
  )
}

export default LoaderBtn