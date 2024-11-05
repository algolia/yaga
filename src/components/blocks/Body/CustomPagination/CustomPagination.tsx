import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { usePagination } from "react-instantsearch";

export function CustomPagination() {
  const { currentRefinement, nbPages, refine } = usePagination();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => refine(currentRefinement - 1)} />
        </PaginationItem>

        {currentRefinement > 0 && (
          <PaginationItem>
            <PaginationLink onClick={() => refine(currentRefinement - 1)}>
              {currentRefinement}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{currentRefinement + 1}</PaginationLink>
        </PaginationItem>
        {currentRefinement < nbPages - 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => refine(currentRefinement + 1)}>
              {currentRefinement + 2}
            </PaginationLink>
          </PaginationItem>
        )}


        <PaginationItem>
          <PaginationNext onClick={() => refine(currentRefinement + 1)}  />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
