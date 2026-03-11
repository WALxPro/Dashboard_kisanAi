import { Search } from 'lucide-react'
import React from 'react'
import Input from './Input'

const Searchbar = () => {
  return (
        //  <div className="flex items-center gap-3">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search ads..."  className="pl-10" />
        </div>
        
      // </div>
  )
}
// value={search} onChange={(e) => setSearch(e.target.value)}
export default Searchbar