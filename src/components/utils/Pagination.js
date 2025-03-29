import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  border-radius: 4px;
  background-color: ${props => 
    props.active ? props.theme.colors.primary : props.theme.colors.lighter};
  color: ${props => 
    props.active ? props.theme.colors.textLight : props.theme.colors.text};
  border: 1px solid ${props => 
    props.active ? props.theme.colors.primary : props.theme.colors.light};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => 
      props.active ? props.theme.colors.primary : props.theme.colors.light};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.lighter};
  }
`;

const PageInfo = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

/**
 * Pagination Component
 * 
 * @param {number} currentPage - Current active page
 * @param {number} totalPages - Total number of pages
 * @param {function} onPageChange - Callback when page changes
 * @param {number} siblingCount - Number of siblings to show on each side of current page
 */
const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  siblingCount = 1,
  showInfo = true
}) => {
  // Don't render if there's only one page or no pages
  if (totalPages <= 1) return null;
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    // Always show first page
    pageNumbers.push(1);
    
    // Calculate range around current page
    const leftSibling = Math.max(2, currentPage - siblingCount);
    const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount);
    
    // Add dots indicator for skipped pages
    if (leftSibling > 2) {
      pageNumbers.push('...');
    }
    
    // Add pages in range
    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== totalPages) {
        pageNumbers.push(i);
      }
    }
    
    // Add dots indicator for skipped pages
    if (rightSibling < totalPages - 1) {
      pageNumbers.push('...');
    }
    
    // Always show last page if more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <PaginationContainer>
      <PaginationButton 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </PaginationButton>
      
      {pageNumbers.map((pageNumber, index) => 
        pageNumber === '...' ? (
          <PageInfo key={`ellipsis-${index}`}>...</PageInfo>
        ) : (
          <PaginationButton
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        )
      )}
      
      <PaginationButton 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </PaginationButton>
      
      {showInfo && totalPages > 0 && (
        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
