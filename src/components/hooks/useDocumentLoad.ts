import React, {useState} from 'react';


export const useDocumentLoad = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess ({}) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return onDocumentLoadSuccess;
}