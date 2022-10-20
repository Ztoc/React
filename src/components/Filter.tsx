import React, { useEffect, useState } from 'react'
import useList from '../Hooks/useList'
import { CheckBox } from './CheckBox'

const types = ['xa', 'xb', 'xc', 'xd', 'xe', 'xf', 'xg', 'xh', 'xi']

type Props = {
  sort: () => void
}

const Filter = ({ sort }: Props) => {
  const { setFilter } = useList()
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    setFilter(filters)
  }, [filters])
  const handleChange = (label: string) => {
    let pos = filters.indexOf(label)
    if (pos === -1) {
      setFilters([...filters, label])
    } else {
      filters.splice(pos, 1)
    }
    setFilter(filters)
    sort()
  }

  return (
    <div>
      <div className="title">
        <h3 className="text  mb-3">Types</h3>
      </div>
      <div className="content">
        {types.map((item, index) => (
          <CheckBox handleChange={handleChange} key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Filter
