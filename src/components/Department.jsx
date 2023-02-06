import { Item } from "./Item"

import Extend from "../assets/icons/extend.png"

import { colorDepartments } from "../data/colorDepartments"

export function Department({name, items}) {
  const departmentColor = colorDepartments[name]

  return (
    <div>
      <header
        className="flex justify-between  px-6 py-1 cursor-pointer"
        style={{backgroundColor: departmentColor}}
      >
        <h3 className="text-white font-bold text-2xl">{name}</h3>
        <img src={Extend} alt="" className="aspect-[22/11] object-contain"/>
      </header>

      <ul
        className="flex flex-col bg-[#1B741F80] text-white text-2xl font-regular rounded-b-lg py-2"
        style={{
          backgroundColor: `${departmentColor}80`
        }}
      >
        {items.map((item, i) => (
          <Item
            item={item}
            departmentName={name}
            departmentColor={departmentColor}
            key={item+i}
          />
        ))}
      </ul>
    </div>

  )
}
