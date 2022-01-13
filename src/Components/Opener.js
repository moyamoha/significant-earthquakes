import React from 'react'

function Opener({sideOpened, setSideOpened}) {
    return (
        <div id="opener" style={{width: "50px", backgroundColor:"inherit"}}>
            {!sideOpened ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="50px"
                    fill="currentColor"
                    className="bi bi-chevron-double-right rounded"
                    viewBox="0 0 16 16"
                    onClick={() => setSideOpened(!sideOpened)}
                >
                    <path
                        fillRule="evenodd"
                        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                    <path
                        fillRule="evenodd"
                        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="50px"
                    fill="currentColor"
                    className="bi bi-chevron-double-left rounded"
                    viewBox="0 0 16 16"
                    onClick={() => setSideOpened(!sideOpened)}
                >
                    <path
                        fillRule="evenodd"
                        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                    <path
                        fillRule="evenodd"
                        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                </svg>
            )}
        </div>
    );
}

export default Opener
