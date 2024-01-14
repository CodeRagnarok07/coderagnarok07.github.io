import React from 'react'

export default function Pagination({ page = { totalPages: 3, totalDocs: 30, pagingCounter: 1, page: 1, prevPage: null, nextPage: 2 }, setPage, refetch, name="objetos" }) {

  const pages = [page.prevPage, page.page, page.nextPage];


  const upDatePage = (current) => {
    setPage({ ...page, ["page"]: current, })
    refetch()
  }
  return (
    <Link className='flex justify-between mb-[47px]'>

      <Link></Link>
     

      <Link className='flex justify-center ml-6'>
        {pages[0] ?
          <Link
            onClick={(target) => upDatePage(pages[0])}
            className='btn-pg ligh rounded-full'>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.75699 6.99994L7.70699 11.9499C7.8025 12.0422 7.87868 12.1525 7.93109 12.2745C7.9835 12.3965 8.01108 12.5278 8.01224 12.6605C8.01339 12.7933 7.98809 12.925 7.93781 13.0479C7.88753 13.1708 7.81327 13.2824 7.71938 13.3763C7.62549 13.4702 7.51384 13.5445 7.39094 13.5948C7.26804 13.645 7.13636 13.6703 7.00359 13.6692C6.87081 13.668 6.73959 13.6404 6.61758 13.588C6.49558 13.5356 6.38523 13.4594 6.29299 13.3639L0.635987 7.70694C0.448516 7.51941 0.343201 7.2651 0.343201 6.99994C0.343201 6.73477 0.448516 6.48046 0.635987 6.29294L6.29299 0.635936C6.48159 0.453778 6.73419 0.352984 6.99639 0.355262C7.25858 0.357541 7.5094 0.46271 7.69481 0.648118C7.88021 0.833526 7.98538 1.08434 7.98766 1.34654C7.98994 1.60873 7.88914 1.86133 7.70699 2.04994L2.75699 6.99994Z" fill="#071234" />
            </svg>
          </Link>
          :
          <Link className='w-[9px]'/>
        }

        {pages.map((e, i) => (
          e !== null &&
          <Link
            onClick={(target) => upDatePage(e)}
            key={i} className={`btn-pg rounded-full ${e == page.page ? 'primary text-white' : 'ligh'}`}>
            {e}
          </Link>
        ))}

        {pages[2] ?
          <Link
            onClick={(target) => upDatePage(pages[2])}
            className='btn-pg ligh rounded-full'>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.31402 7.07098L0.364025 2.12098C0.181867 1.93238 0.0810724 1.67978 0.0833508 1.41758C0.0856292 1.15538 0.190798 0.904571 0.376206 0.719163C0.561614 0.533755 0.812427 0.428586 1.07462 0.426307C1.33682 0.424029 1.58942 0.524823 1.77802 0.706981L7.43502 6.36398C7.6225 6.55151 7.72781 6.80582 7.72781 7.07098C7.72781 7.33615 7.6225 7.59045 7.43502 7.77798L1.77802 13.435C1.58942 13.6171 1.33682 13.7179 1.07462 13.7157C0.812427 13.7134 0.561614 13.6082 0.376206 13.4228C0.190798 13.2374 0.0856292 12.9866 0.0833508 12.7244C0.0810724 12.4622 0.181867 12.2096 0.364025 12.021L5.31402 7.07098Z" fill="#071234" />
            </svg>
          </Link>
              :

              <>
              <Link className='w-[55px] '/>
              <Link className='w-[55px] '/>
              </>


        }
      </Link>
    </Link>
  )
}
