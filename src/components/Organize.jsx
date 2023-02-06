import { useState } from "react"

import RustyVacations from "../assets/rusty/rustyVacations.png"

import { OrganizationForm } from "./OrganizationForm"
import { BtnHome } from "./BtnHome"
import { Lists } from "./Lists"
import { Department } from "./Department"

export function Organize({setOrganizing}) {

  const [lists, setLists] = useState(JSON.parse(localStorage.getItem('lists')) ?? [ {name: "Shopping List", departments: []} ])
  const [actualList, setActualList] = useState(JSON.parse(localStorage.getItem('actualList')) ?? lists[0] )

  return(
    <main
      className='
      w-[90%]
      mx-auto
      max-w-5xl
      py-24
      md:py-24
      md:grid
      md:grid-cols-3
      gap-12
      lg:gap-7
      '
    >
      <section className=''>
        <BtnHome
          setOrganizing={setOrganizing}
        />
        <OrganizationForm
          lists={lists}
          setLists={setLists}
          actualList={actualList}
          setActualList={setActualList}
        />

        <Lists
          lists={lists}
          actualList={actualList}
        />

      </section>
      <section className="col-start-2 col-end-4 grid grid-cols-2 gap-3 auto-rows-max">
        <h2 className="h-max block text-2xl text-white font-bold max-w-prose text-center col-start-1 col-end-3">
          Shopping list 
        </h2>
        {!actualList.departments[0]?.items[0] && <div className="col-start-1 col-end-3 my-20 grid place-items-center">
          <h2 className="block text-2xl text-white font-regular max-w-[25rem] text-center">
            Add items for Rusty to get down to business
          </h2>
          <img src={RustyVacations} alt="Rusty sunbathing on a towel" width="250px" height="250px" className="aspect-[440/500] w-[12rem]"/>
        </div>}

        {actualList.departments.map((department) => (
          <Department
            name={department.name}
            items={department.items}
            key={department.name}
          />
        ))}

      </section>
    </main>

  )
}
