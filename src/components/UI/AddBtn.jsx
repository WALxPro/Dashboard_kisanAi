import React from 'react'
import Button from './Button'
import { Plus } from 'lucide-react'

const AddBtn = () => {
  return (
            <Button  className="flex items-center gap-2 px-5 py-2.5">
          <Plus className="h-4 w-4" /> Add New Ad
        </Button>
  )
}

export default AddBtn