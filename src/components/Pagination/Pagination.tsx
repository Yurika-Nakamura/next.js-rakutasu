import { Link as MuiLink, Pagination as MuiPagination, PaginationItem } from '@mui/material'

type PaginationProps = {
    pageNumber: number;
    totalCount: number;
}

const Pagination = ({ pageNumber, totalCount }: PaginationProps) => {
    return (
        <MuiPagination
        page={pageNumber}
        count={totalCount}
        renderItem={item => (
            <PaginationItem
            component={MuiLink}
            href={item.page === 1 ?  `/`: `${item.page}`}
            {...item}
            />
        )}
        />
    )
}

export default Pagination;