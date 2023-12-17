'use client'

import { useState } from "react"
import { UserEntry } from "./Components/UserEntry"
import { group } from "console"

export default function Home() {
  const [groupMembers, setGroupMemebers] = useState([''])
  const handleSubmitGroup = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const numberOptions = []
  for (let i = 1; i <= 10; i++) {
      numberOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
  }

  const selectGroupSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let newMemberList = []

    for(let i = 1; i <= Number(e.target.value); i++) {
      newMemberList.push(`member${i}`)
    }

    setGroupMemebers([...newMemberList])

  }


  return (
    <main className="flex bg-slate-500 min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form className="flex flex-col" onSubmit={handleSubmitGroup}>
          <label>Name of secret santa group</label>
          <input type="text" id="group-name" />
          <br />
          <label>how many people in the group?</label>
          <select name="groupSize" id="group-size" onChange={(e) => selectGroupSize(e)}>
            {numberOptions}
          </select>
          <label>Group 1</label>
          <br />
          {groupMembers.map((member, index) => {
            return (
              <div key={index} className="p-4">
                  <label className="px-1">Name</label>
                  <input type="text" id='group1-member-name' />
                  <label className="px-1" >email</label>
                  <input type="text" id='group1-member-email' />
              </div>
              )
            })}
          <label>Group 2</label>
          <br />
          {groupMembers.map((member, index) => {
            return (
              <div key={index} className="p-4">
                  <label className="px-1">Name</label>
                  <input type="text" id='group2-member-name' />
                  <label className="px-1" >email</label>
                  <input type="text" id='group2-member-email' />
              </div>
              )
            })}
          <input className="bg-slate-300" type="submit" value="Submit" />
        </form>
      </div>
    </main>
  )
}
